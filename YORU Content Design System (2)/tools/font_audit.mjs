/* Font subset audit — T3.
 *
 * Reads the woff2 files in fonts/ (Source Han Sans SC 4 weights, Source Han
 * Serif SC 4 weights), pulls each face's cmap, and reports what characters
 * are missing. Two questions this answers:
 *
 *   1. "Does subset X cover every character my content actually uses?"
 *      Audits every fixture (including content.js) and lists misses per weight.
 *
 *   2. "Is subset X honest about covering GB2312?"
 *      Enumerates the full GB2312 charset and lists what's not in the woff2.
 *      Missing chars from level-2 (0xD8A1..0xF7FE) are exactly the "捋" bucket.
 *
 * Usage:
 *   node tools/font_audit.mjs
 *   node tools/font_audit.mjs --char 捋
 *   node tools/font_audit.mjs --json
 *
 * Not part of the render loop. Run it after re-subsetting fonts, or when a
 * single character comes up suspicious. render_check.mjs handles per-render
 * fallback detection (a different question — "is this specific page missing
 * a char right now"). */

import * as fontkit from "fontkit";
import fsp from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "..");
const FONTS_DIR = path.join(ROOT, "fonts");
const FIXTURES_DIR = path.join(ROOT, "ui_kits/xiaohongshu/fixtures");
const CONTENT_JS = path.join(ROOT, "ui_kits/xiaohongshu/content.js");

// -------- font faces we audit ------------------------------------------------

const FACES = [
  { family: "Source Han Sans SC", weight: 300, file: "SourceHanSansSC-Light.woff2" },
  { family: "Source Han Sans SC", weight: 400, file: "SourceHanSansSC-Regular.woff2" },
  { family: "Source Han Sans SC", weight: 500, file: "SourceHanSansSC-Medium.woff2" },
  { family: "Source Han Sans SC", weight: 700, file: "SourceHanSansSC-Bold.woff2" },
  { family: "Source Han Serif SC", weight: 400, file: "SourceHanSerifSC-Regular.woff2" },
  { family: "Source Han Serif SC", weight: 500, file: "SourceHanSerifSC-Medium.woff2" },
  { family: "Source Han Serif SC", weight: 700, file: "SourceHanSerifSC-Bold.woff2" },
  { family: "Source Han Serif SC", weight: 900, file: "SourceHanSerifSC-Heavy.woff2" }
];

// -------- args --------------------------------------------------------------

const args = { char: null, json: false };
for (let i = 2; i < process.argv.length; i++) {
  const k = process.argv[i];
  if (k === "--char") args.char = process.argv[++i];
  else if (k === "--json") args.json = true;
  else { console.error("unknown option: " + k); process.exit(2); }
}

// -------- load fonts, collect covered codepoints per face -------------------

async function faceCoverage(face) {
  const buf = await fsp.readFile(path.join(FONTS_DIR, face.file));
  const font = fontkit.create(buf);
  const covered = new Set();
  const nGlyphs = font.numGlyphs || 0;
  // Try the canonical characterSet first; some fontkit builds expose it via
  // the cmap subtable, walk unicode plane 0 fallback if not.
  if (font.characterSet && font.characterSet.length) {
    for (const cp of font.characterSet) covered.add(cp);
  } else {
    // Fallback: brute-scan BMP; woff2 loads sparse so misses are cheap.
    for (let cp = 0; cp < 0xffff; cp++) {
      const g = font.glyphForCodePoint(cp);
      if (g && g.id !== 0) covered.add(cp);
    }
  }
  return { face, covered, nGlyphs, file: face.file, size: buf.length };
}

// -------- content charset (fixtures + content.js) --------------------------

async function readContentCharset() {
  const files = [CONTENT_JS];
  const fixtures = (await fsp.readdir(FIXTURES_DIR)).filter(n => /^content\..+\.js$/.test(n));
  for (const f of fixtures) files.push(path.join(FIXTURES_DIR, f));
  const chars = new Set();
  for (const p of files) {
    let s = ""; try { s = await fsp.readFile(p, "utf8"); } catch { continue; }
    for (const ch of s) {
      const cp = ch.codePointAt(0);
      if (cp > 127) chars.add(cp);   // ASCII covered by Latin stack
    }
  }
  return chars;
}

// -------- GB2312 charset ---------------------------------------------------

/* GB2312 sits inside GBK. Level-1 is 0xB0A1..0xF7FE row A1-D7; level-2 is
   D8A1..F7FE. To enumerate covered unicode codepoints we round-trip through
   an iconv decode via TextDecoder("gbk") which Node supports natively. */
function enumerateGB2312() {
  const dec = new TextDecoder("gb2312", { fatal: false });
  const out = { level1: new Set(), level2: new Set() };
  for (let hi = 0xA1; hi <= 0xF7; hi++) {
    for (let lo = 0xA1; lo <= 0xFE; lo++) {
      const byte = new Uint8Array([hi, lo]);
      const s = dec.decode(byte);
      if (!s || s.length !== 1) continue;
      const cp = s.codePointAt(0);
      if (cp === 0xFFFD) continue;
      if (hi <= 0xA9) continue;   // rows A1..A9 are symbols / kana / bopomofo — not hanzi
      if (hi >= 0xB0 && hi <= 0xD7) out.level1.add(cp);
      else if (hi >= 0xD8 && hi <= 0xF7) out.level2.add(cp);
    }
  }
  return out;
}

// -------- report -----------------------------------------------------------

function fmtCharList(cps, limit = 40) {
  const list = Array.from(cps).slice(0, limit).map(cp =>
    String.fromCodePoint(cp) + "(U+" + cp.toString(16).toUpperCase().padStart(4, "0") + ")"
  );
  return list.join(" ") + (cps.size > limit ? "  … 共 " + cps.size : "");
}

async function main() {
  const coverages = [];
  for (const face of FACES) coverages.push(await faceCoverage(face));

  const contentChars = await readContentCharset();
  const gb = enumerateGB2312();

  // Single-char check mode
  if (args.char) {
    const cp = args.char.codePointAt(0);
    const cpHex = "U+" + cp.toString(16).toUpperCase().padStart(4, "0");
    console.log("\n  '" + args.char + "' (" + cpHex + ")\n");
    for (const c of coverages) {
      const has = c.covered.has(cp);
      console.log("   " + (has ? "有" : "缺").padEnd(4) + " " + c.face.family + " " + c.face.weight + "  ·  " + c.file);
    }
    // Which GB2312 bucket if any
    if (gb.level1.has(cp)) console.log("\n   在 GB2312 一级字库（B0A1..D7FE）");
    else if (gb.level2.has(cp)) console.log("\n   在 GB2312 二级字库（D8A1..F7FE）");
    else console.log("\n   不在 GB2312（可能是 GBK/CJKExt/符号）");
    return 0;
  }

  const report = { faces: [], content_missing: {}, gb2312: {} };

  console.log("\n  ── 字体子集覆盖审计 ────────────────────────────────────────");
  console.log("  文件目录：" + path.relative(ROOT, FONTS_DIR) + "\n");
  for (const c of coverages) {
    const size = (c.size / 1024).toFixed(1) + " KB";
    console.log("   " + c.face.family + " " + c.face.weight + "  ·  " + c.file + "  ·  " + c.covered.size + " 个码位 · " + size);
    report.faces.push({ family: c.face.family, weight: c.face.weight, file: c.file, cps: c.covered.size, bytes: c.size });
  }

  console.log("\n  ── 现有 fixtures + content.js 的字符覆盖 ─────────────────────");
  console.log("  待覆盖字符：" + contentChars.size + " 个（不含 ASCII）");
  for (const c of coverages) {
    const missing = new Set();
    for (const cp of contentChars) if (!c.covered.has(cp)) missing.add(cp);
    const marker = missing.size === 0 ? "OK" : String(missing.size).padStart(3);
    console.log("   " + marker + "  " + c.face.family + " " + c.face.weight + "  ·  " + c.file + (missing.size ? "   缺: " + fmtCharList(missing) : ""));
    if (missing.size) {
      report.content_missing[c.face.family + " " + c.face.weight] = Array.from(missing).map(cp => ({
        char: String.fromCodePoint(cp),
        cp: "U+" + cp.toString(16).toUpperCase().padStart(4, "0")
      }));
    }
  }

  console.log("\n  ── GB2312 覆盖率 ────────────────────────────────────────────");
  console.log("  一级字库 " + gb.level1.size + " 字（常用汉字），二级字库 " + gb.level2.size + " 字（次常用）");
  for (const c of coverages) {
    let miss1 = 0, miss2 = 0;
    for (const cp of gb.level1) if (!c.covered.has(cp)) miss1++;
    for (const cp of gb.level2) if (!c.covered.has(cp)) miss2++;
    const pct1 = ((1 - miss1 / gb.level1.size) * 100).toFixed(1);
    const pct2 = ((1 - miss2 / gb.level2.size) * 100).toFixed(1);
    console.log("   " + c.face.family + " " + c.face.weight + "  ·  一级 " + pct1 + "% (缺 " + miss1 + ")  二级 " + pct2 + "% (缺 " + miss2 + ")");
    report.gb2312[c.face.family + " " + c.face.weight] = { level1_missing: miss1, level2_missing: miss2 };
  }

  // 「捋」 U+634B — the specific character T3 asks about
  const LU = 0x634B;
  console.log("\n  ── 「捋」 U+634B（GB2312 二级） ─────────────────────────────");
  for (const c of coverages) {
    console.log("   " + (c.covered.has(LU) ? "有" : "缺").padEnd(4) + " " + c.face.family + " " + c.face.weight + "  ·  " + c.file);
  }

  if (args.json) console.log("\n" + JSON.stringify(report, null, 2));
  return 0;
}

try { process.exit(await main()); }
catch (e) { console.error("\n  " + (e && e.message ? e.message : String(e)) + "\n"); process.exit(2); }
