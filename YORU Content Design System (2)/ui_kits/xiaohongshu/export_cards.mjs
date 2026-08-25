/* Render the Xiaohongshu workbench in a real browser, check what came out, and
   write the cards as PNG.
 *
 * This is the only thing that counts as "done". HTML is an intermediate product:
 * a page can be valid HTML, pass the static lint, and still be 60% empty, have a
 * broken screenshot, or push its last paragraph under the footer. None of that is
 * visible without rendering it and looking.
 *
 *   node ui_kits/xiaohongshu/export_cards.mjs                 # render, check, export PNG
 *   node ui_kits/xiaohongshu/export_cards.mjs --check         # render and check only
 *   node ui_kits/xiaohongshu/export_cards.mjs --fixture long-tutorial
 *   node ui_kits/xiaohongshu/export_cards.mjs --all-variants  # one pass per variant
 *   node ui_kits/xiaohongshu/export_cards.mjs --jpg --zip
 *
 * Options
 *   --check              skip jpg/zip, print the report
 *   --fixture <name>     load fixtures/content.<name>.js instead of content.js
 *   --variant <id>       signal | lab | studio | special   (default: the post's own)
 *   --all-variants       run all four in sequence
 *   --size <w>x<h>       1242x1656 (default) | 1080x1440 | 1080x1350
 *   --out <dir>          default: out/<fixture|post>-<variant>
 *   --jpg                also write JPG alongside PNG
 *   --zip                pack the output folder into a .zip
 *   --port <n>           static server port (default: an open one)
 *
 * Exits non-zero if any card fails a check, so it can gate a build.
 */

import { chromium } from "playwright";
import http from "node:http";
import fs from "node:fs";
import fsp from "node:fs/promises";
import path from "node:path";
import zlib from "node:zlib";
import { fileURLToPath } from "node:url";

const KIT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(KIT_DIR, "../..");
const VARIANTS = ["signal", "lab", "studio", "special"];

/* Occupancy floors. A page that is mostly white is almost always a pagination or
   authoring mistake, but covers are supposed to be airy and end cards are one
   headline, so they answer to different numbers — or to nothing at all. */
const FILL_FLOOR = { content: 0.55, cover: 0.30 };

// ---------------------------------------------------------------- args

function parseArgs(argv) {
  const a = { size: "1242x1656" };
  for (let i = 0; i < argv.length; i++) {
    const k = argv[i];
    if (k === "--check") a.check = true;
    else if (k === "--jpg") a.jpg = true;
    else if (k === "--zip") a.zip = true;
    else if (k === "--all-variants") a.allVariants = true;
    else if (k === "--all-fixtures") a.allFixtures = true;
    else if (k === "--fixture") a.fixture = argv[++i];
    else if (k === "--variant") a.variant = argv[++i];
    else if (k === "--size") a.size = argv[++i];
    else if (k === "--out") a.out = argv[++i];
    else if (k === "--port") a.port = Number(argv[++i]);
    else if (k === "--help" || k === "-h") a.help = true;
    else throw new Error("unknown option: " + k);
  }
  return a;
}

// ---------------------------------------------------------------- static server

const MIME = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8",
  ".jsx": "text/javascript; charset=utf-8", ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8", ".json": "application/json; charset=utf-8",
  ".woff2": "font/woff2", ".woff": "font/woff", ".ttf": "font/ttf", ".otf": "font/otf",
  ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
  ".gif": "image/gif", ".svg": "image/svg+xml", ".webp": "image/webp", ".avif": "image/avif"
};

/* The workbench uses relative paths and fetches its own .jsx files, so file://
   is not an option — it needs an origin. */
function startServer(rootDir, port = 0) {
  const server = http.createServer(async (req, res) => {
    try {
      const url = new URL(req.url, "http://x");
      const rel = decodeURIComponent(url.pathname).replace(/^\/+/, "");
      const file = path.resolve(rootDir, rel);
      if (!file.startsWith(path.resolve(rootDir))) { res.writeHead(403).end(); return; }
      const body = await fsp.readFile(file);
      res.writeHead(200, { "content-type": MIME[path.extname(file).toLowerCase()] || "application/octet-stream" });
      res.end(body);
    } catch {
      res.writeHead(404, { "content-type": "text/plain" }).end("not found");
    }
  });
  return new Promise(resolve => server.listen(port, "127.0.0.1", () => {
    resolve({ origin: "http://127.0.0.1:" + server.address().port, close: () => new Promise(r => server.close(r)) });
  }));
}

// ---------------------------------------------------------------- in-page checks

/* Runs inside the page. Everything geometric goes through window.readPageGeometry —
   the same function the paginator used to lay these cards out. Two copies of the
   page model is exactly the bug this whole pass exists to remove.

   Checks are role-aware on purpose. Content pages flow through the column and can
   overflow it. Covers and end cards are fixed absolute layouts that cannot overflow
   by pagination — but a cover CAN come out nearly empty, which is its own failure,
   so it gets measured a different way. */
const COLLECT = () => {
  const pg = window.__YORU_PAGINATION__ || {};
  const post = window.YORU_POST || {};
  const blocks = post.blocks || [];
  const pageIdx = pg.pages || [];
  const pageTypes = pageIdx.map(idxs => idxs.map(i => (blocks[i] || {}).t));
  const oversized = (pg.report && pg.report.oversized) || [];
  const lastContent = (pg.pages || []).length - 1;
  const SPARSE_OK = ["quote", "figure"];

  const cards = Array.from(document.querySelectorAll("main [data-yoru-role]"));
  const uniqFonts = Array.from(new Set(Array.from(document.fonts).filter(f => f.status === "loaded").map(f => f.family)));

  const out = cards.map((card, i) => {
    const role = card.getAttribute("data-yoru-role");
    const declared = (card.getAttribute("data-size") || "").split("x").map(Number);
    const rect = card.getBoundingClientRect();
    const findings = [];
    let fill = null;

    if (declared.length === 2 && !Number.isNaN(declared[0])) {
      if (Math.round(rect.width) !== declared[0] || Math.round(rect.height) !== declared[1]) {
        findings.push({ level: "error", code: "size",
          msg: "渲染尺寸 " + Math.round(rect.width) + "x" + Math.round(rect.height) + " 与声明尺寸 " + declared.join("x") + " 不符" });
      }
    }

    for (const img of card.querySelectorAll("img")) {
      if (!img.naturalWidth) findings.push({ level: "error", code: "image", msg: "图片未加载：" + (img.getAttribute("src") || "(无 src)") });
    }

    const geom = window.readPageGeometry ? window.readPageGeometry(card) : null;

    if (role === "content" && geom && geom.height > 0) {
      const p = i - 1;                       // card 0 is the cover
      const col = card.querySelector("[data-yoru-flow]");
      const kids = Array.from(col ? col.children : []);
      if (kids.length) {
        const top = col.getBoundingClientRect().top + (parseFloat(getComputedStyle(col).paddingTop) || 0);
        const bottom = Math.max(...kids.map(k => k.getBoundingClientRect().bottom));
        const used = bottom - top;
        fill = used / geom.height;
        if (used > geom.height + 1) {
          /* One block alone on a page and still too tall means pagination has
             nothing left to do — the block itself has to be cut down. Say so,
             because "内容溢出" reads like a paginator bug and this one is not. */
          const solo = (pageIdx[p] || []).length === 1 && oversized.includes(pageIdx[p][0]);
          findings.push({ level: "error", code: solo ? "oversized" : "overflow",
            msg: solo
              ? "单块高 " + Math.round(used) + "px，整页只有 " + Math.round(geom.height) + "px —— 分页器已经无能为力，去裁局部或拆多页（截图不要缩小）"
              : "内容溢出 " + Math.round(used - geom.height) + "px（可用 " + Math.round(geom.height) + "px，实占 " + Math.round(used) + "px）" });
        }
        const foot = card.querySelector("[data-yoru-footer]");
        if (foot && bottom > foot.getBoundingClientRect().top) {
          findings.push({ level: "error", code: "footer", msg: "内容压到页脚上" });
        }
        // 每页上限，数的是 block 数据不是 DOM —— readme 与 CLAUDE.md 早就写死了这几条，
        // 以前没人数。行内荧光笔的计数走 blocks.jsx 导出的 inlineMarks，共用同一份正则。
        const onPage = (pageIdx[p] || []).map(k => blocks[k]).filter(Boolean);
        const n = { marker: 0, marginnote: 0, callout: 0, tag: 0 };
        for (const b of onPage) {
          if (b.t === "marginnote") n.marginnote++;
          if (b.t === "callout") n.callout++;
          if (b.t === "labels") n.tag += (b.tags || []).length;
          if (b.t === "code" || b.t === "prompt") continue;   // 原样文本，不解析
          for (const s of [b.text, b.title, b.caption]) n.marker += window.inlineMarks(s).marker;
          for (const it of b.items || []) {
            if (typeof it !== "object") continue;
            n.marker += window.inlineMarks(it.title).marker + window.inlineMarks(it.body).marker;
          }
        }
        const CAPS = [
          ["marker", 1, "荧光笔", "每页只准一条，第二条会把第一条抵消掉"],
          ["marginnote", 1, "手写旁批", "每页最多一条，两张歪便签就不像手写了"],
          ["callout", 1, "Callout", "一页最多一个"],
          ["tag", 3, "Tag", "一页最多三个"]
        ];
        for (const [key, cap, name, why] of CAPS) {
          if (n[key] > cap) findings.push({ level: "warn", code: "cap",
            msg: name + " " + n[key] + " 个，超过上限 " + cap + "（" + why + "）" });
        }
        // 金句页、纯图页天生就空；末页装不满是正常余量，不是缺陷
        const types = pageTypes[p] || [];
        const exempt = p === lastContent || (types.length > 0 && types.every(t => SPARSE_OK.includes(t)));
        if (!exempt && fill < FILL_FLOORS.content) {
          findings.push({ level: "warn", code: "thin",
            msg: "内容占用率 " + Math.round(fill * 100) + "%，低于 " + Math.round(FILL_FLOORS.content * 100) + "%（分页没装满，检查是否有超大块把这页顶开了）" });
        }
      }
    }

    if (role === "cover") {
      /* Two independent signals, because a YORU cover is SUPPOSED to be airy —
         a complete one lands around 35% and that is the house style. What went
         wrong on the real post was structural: a title with nothing else on the
         plate. So check the fields, and check the plate, separately. */
      const c = post.cover || {};
      const missing = [
        c.issueNumber ? null : "issueNumber",
        (c.tags && c.tags.length) ? null : "tags",
        c.aside ? null : "aside",
        c.subtitle ? null : "subtitle"
      ].filter(Boolean);
      if (missing.length) {
        findings.push({ level: "warn", code: "cover-fields",
          msg: "封面缺 " + missing.join(" / ") + "，套印封面靠这几件撑住版面（见 readme「封面」）" });
      }
      const plate = card.querySelector("[data-yoru-plate]");
      const kids = plate ? Array.from(plate.children) : [];
      if (plate && kids.length) {
        const top = Math.min(...kids.map(k => k.getBoundingClientRect().top));
        const bottom = Math.max(...kids.map(k => k.getBoundingClientRect().bottom));
        fill = (bottom - top) / plate.getBoundingClientRect().height;
        if (fill < FILL_FLOORS.cover) {
          findings.push({ level: "warn", code: "thin",
            msg: "封面标题区只占版心 " + Math.round(fill * 100) + "%，其余是空白" });
        }
      }
    }

    // text screenshots have to stay legible on a phone
    if (geom) {
      for (const fig of card.querySelectorAll("figure")) {
        const img = fig.querySelector("img");
        if (!img || !img.naturalWidth) continue;
        const box = img.parentElement, boxRect = box.getBoundingClientRect();
        const cs = getComputedStyle(img);
        const isText = cs.objectFit === "contain" || getComputedStyle(box).aspectRatio === "auto";
        if (!isText) continue;
        const painted = cs.objectFit === "contain"
          ? Math.min(boxRect.width, boxRect.height * (img.naturalWidth / img.naturalHeight))
          : boxRect.width;
        if (painted < geom.width * 0.9) {
          findings.push({ level: "warn", code: "screenshot",
            msg: "文字截图渲染宽度 " + Math.round(painted) + "px，只有内容列宽的 " + Math.round(painted / geom.width * 100) + "%（手机上看不清，拆页或裁局部，不要继续缩小）" });
        }
      }
    }

    return { n: i + 1, role, rect: { w: Math.round(rect.width), h: Math.round(rect.height) },
      fill: fill == null ? null : Number(fill.toFixed(3)), findings };
  });

  /* Font check. "这一页没用到黑体" and "黑体没加载" look identical if you only
     look at document.fonts — an unused face is never loaded. So ask the other
     question: for every element that actually renders text, what family did it
     ask for first? If that family is one of the two self-hosted 思源 and no face
     of it loaded, the text on screen is a system fallback. That is the failure
     CLAUDE.md cares about (半宋半黑), and it is the only one worth an error. */
  const strip = s => s.replace(/^["']|["']$/g, "");
  const loaded = new Set(Array.from(document.fonts).filter(f => f.status === "loaded").map(f => strip(f.family)));
  const errored = Array.from(document.fonts).filter(f => f.status === "error").map(f => strip(f.family));
  const asked = new Set();
  for (const el of document.querySelectorAll("main [data-yoru-role] *")) {
    if (!Array.from(el.childNodes).some(n => n.nodeType === 3 && n.textContent.trim())) continue;
    asked.add(strip(getComputedStyle(el).fontFamily.split(",")[0].trim()));
  }
  const SELF_HOSTED = ["Source Han Sans SC", "Source Han Serif SC", "Inter", "JetBrains Mono"];
  const fellBack = SELF_HOSTED.filter(f => asked.has(f) && !loaded.has(f));

  return { cards: out, fonts: uniqFonts, variant: pg.variant || null, fellBack,
    fontErrors: Array.from(new Set(errored)),
    bundleErrors: (window.YORUContentDesignSystem_a0b73e || {}).__errors || [],
    oversized: pg.report ? pg.report.oversized : [] };
};

// ---------------------------------------------------------------- one pass

async function renderPass(browser, origin, opts) {
  const page = await browser.newPage({ viewport: { width: 1360, height: 1800 }, deviceScaleFactor: 1 });
  const consoleErrors = [];
  page.on("console", m => { if (m.type() === "error") consoleErrors.push(m.text()); });
  page.on("pageerror", e => consoleErrors.push(String(e)));

  const q = new URLSearchParams({ scale: "1", bare: "1", size: opts.size });
  if (opts.variant) q.set("variant", opts.variant);
  if (opts.fixture) q.set("fixture", opts.fixture);
  await page.goto(origin + "/ui_kits/xiaohongshu/index.html?" + q, { waitUntil: "load" });

  await page.waitForFunction(() => document.body.dataset.paginated, null, { timeout: 60000 });
  await page.evaluate(async () => {
    await document.fonts.ready;
    const pending = Array.from(document.images).filter(i => !i.complete);
    await Promise.all(pending.map(i => new Promise(r => { i.onload = i.onerror = r; })));
    await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
  });

  await page.evaluate(floors => { window.FILL_FLOORS = floors; }, FILL_FLOOR);
  const report = await page.evaluate(COLLECT);
  report.consoleErrors = consoleErrors;

  for (const family of report.fellBack) {
    report.consoleErrors.push("字体回退：页面用到了 " + family + "，但没有一档加载成功（渲染的是系统兜底字）");
  }
  for (const family of report.fontErrors) {
    report.consoleErrors.push("字体加载失败：" + family + "（@font-face 的 url 取不到）");
  }
  return { page, report };
}

async function shoot(page, outDir, { jpg }) {
  const cards = await page.$$("main [data-yoru-role]");
  const files = [];
  for (let i = 0; i < cards.length; i++) {
    const name = "page-" + String(i + 1).padStart(2, "0");
    await cards[i].screenshot({ path: path.join(outDir, name + ".png"), type: "png" });
    files.push(name + ".png");
    if (jpg) {
      await cards[i].screenshot({ path: path.join(outDir, name + ".jpg"), type: "jpeg", quality: 92 });
      files.push(name + ".jpg");
    }
  }
  return files;
}

// ---------------------------------------------------------------- contact sheet

/* The sheet lives under the project root and links the system's own styles.css,
   so its colours are design tokens rather than a second private palette — and
   the tool stays inside the same no-raw-hex rule as everything else here. */
function sheetHTML(report, title, cssHref) {
  const cell = (c) => {
    const bad = c.findings.some(f => f.level === "error");
    const warn = c.findings.some(f => f.level === "warn");
    const tint = bad ? "var(--stop)" : warn ? "var(--warn)" : "var(--text-muted)";
    return `<figure>
      <img src="page-${String(c.n).padStart(2, "0")}.png" alt="">
      <figcaption style="color:${tint}">
        <b>${String(c.n).padStart(2, "0")}</b> ${c.role} · ${c.rect.w}×${c.rect.h}${c.fill == null ? "" : " · 占用 " + Math.round(c.fill * 100) + "%"}
        ${c.findings.map(f => `<span class="f">${f.level === "error" ? "错误" : "告警"} · ${f.msg}</span>`).join("")}
      </figcaption></figure>`;
  };
  return `<!DOCTYPE html><html lang="zh"><head><meta charset="utf-8"><title>${title}</title>
<link rel="stylesheet" href="${cssHref}">
<style>
body{margin:0;padding:var(--sp-6);background:var(--surface-page);
  font-family:var(--font-body);font-size:var(--fs-small);line-height:1.5;color:var(--text-body)}
h1{font-family:var(--font-label);font-size:var(--fs-label);font-weight:500;
  letter-spacing:var(--ls-label);margin:0 0 var(--sp-5);color:var(--text-muted)}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(15rem,1fr));gap:var(--sp-5)}
figure{margin:0}
img{width:100%;display:block;background:var(--paper-1);border:var(--hair) solid var(--border-hair)}
figcaption{margin-top:var(--sp-2);font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.02em}
.f{display:block;margin-top:var(--sp-1)}
</style></head><body>
<h1>${title}</h1>
<div class="grid">${report.cards.map(cell).join("")}</div>
</body></html>`;
}

async function contactSheet(browser, origin, outDir, report, title) {
  const rel = path.relative(ROOT, outDir).split(path.sep).join("/");
  const cssHref = "../".repeat(rel.split("/").length) + "styles.css";
  await fsp.writeFile(path.join(outDir, "contact-sheet.html"), sheetHTML(report, title, cssHref), "utf8");
  const page = await browser.newPage({ viewport: { width: 1200, height: 900 }, deviceScaleFactor: 1 });
  await page.goto(origin + "/" + rel + "/contact-sheet.html", { waitUntil: "load" });
  await page.evaluate(async () => {
    await document.fonts.ready;
    const pending = Array.from(document.images).filter(i => !i.complete);
    await Promise.all(pending.map(i => new Promise(r => { i.onload = i.onerror = r; })));
  });
  await page.screenshot({ path: path.join(outDir, "contact-sheet.png"), fullPage: true });
  await page.close();
}

// ---------------------------------------------------------------- zip

/* Store-and-deflate zip, enough to hand a folder of cards to a phone.
   Node ships zlib; pulling an archiver dependency in for this would be silly. */
async function zipDir(dir, zipPath) {
  // cards only — the contact sheet is a review artefact, not something you send out
  const names = (await fsp.readdir(dir)).filter(n => /^page-\d+\.(png|jpe?g)$/i.test(n)).sort();
  const chunks = [], central = [];
  let offset = 0;
  for (const name of names) {
    const raw = await fsp.readFile(path.join(dir, name));
    const deflated = zlib.deflateRawSync(raw);
    const crc = zlib.crc32 ? zlib.crc32(raw) : crc32(raw);
    const nameBuf = Buffer.from(name, "utf8");
    const local = Buffer.alloc(30);
    local.writeUInt32LE(0x04034b50, 0); local.writeUInt16LE(20, 4); local.writeUInt16LE(0, 6);
    local.writeUInt16LE(8, 8); local.writeUInt16LE(0, 10); local.writeUInt16LE(0x21, 12);
    local.writeUInt32LE(crc >>> 0, 14); local.writeUInt32LE(deflated.length, 18);
    local.writeUInt32LE(raw.length, 22); local.writeUInt16LE(nameBuf.length, 26); local.writeUInt16LE(0, 28);
    chunks.push(local, nameBuf, deflated);

    const cen = Buffer.alloc(46);
    cen.writeUInt32LE(0x02014b50, 0); cen.writeUInt16LE(20, 4); cen.writeUInt16LE(20, 6);
    cen.writeUInt16LE(0, 8); cen.writeUInt16LE(8, 10); cen.writeUInt16LE(0, 12); cen.writeUInt16LE(0x21, 14);
    cen.writeUInt32LE(crc >>> 0, 16); cen.writeUInt32LE(deflated.length, 20); cen.writeUInt32LE(raw.length, 24);
    cen.writeUInt16LE(nameBuf.length, 28); cen.writeUInt32LE(offset, 42);
    central.push(cen, nameBuf);
    offset += 30 + nameBuf.length + deflated.length;
  }
  const centralBuf = Buffer.concat(central);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0); end.writeUInt16LE(names.length, 8); end.writeUInt16LE(names.length, 10);
  end.writeUInt32LE(centralBuf.length, 12); end.writeUInt32LE(offset, 16);
  await fsp.writeFile(zipPath, Buffer.concat([...chunks, centralBuf, end]));
  return names.length;
}

function crc32(buf) {
  let c, crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c = (crc ^ buf[i]) & 0xff;
    for (let k = 0; k < 8; k++) c = c & 1 ? (c >>> 1) ^ 0xedb88320 : c >>> 1;
    crc = (crc >>> 8) ^ c;
  }
  return (crc ^ 0xffffffff) >>> 0;
}

// ---------------------------------------------------------------- reporting

function printReport(label, report) {
  const errs = report.cards.flatMap(c => c.findings.filter(f => f.level === "error"));
  const warns = report.cards.flatMap(c => c.findings.filter(f => f.level === "warn"));
  console.log("\n  " + label + "  —  " + report.cards.length + " 页");
  for (const c of report.cards) {
    const mark = c.findings.some(f => f.level === "error") ? "x" : c.findings.length ? "!" : "·";
    console.log("   " + mark + " " + String(c.n).padStart(2, "0") + "  " + c.role.padEnd(8) +
      c.rect.w + "x" + c.rect.h + (c.fill == null ? "" : "  占用 " + String(Math.round(c.fill * 100)).padStart(3) + "%"));
    for (const f of c.findings) console.log("        " + (f.level === "error" ? "错误" : "告警") + " · " + f.msg);
  }
  for (const e of report.bundleErrors) console.log("   x 组件加载失败 " + e.path + ": " + e.error);
  for (const e of report.consoleErrors) console.log("   x " + e);
  const errors = errs.length + report.bundleErrors.length + report.consoleErrors.length;
  console.log("   " + errors + " 错误 · " + warns.length + " 告警 · 字体 " + report.fonts.length + " 族已加载");
  return { errors, warns: warns.length };
}

// ---------------------------------------------------------------- main

async function runOne(browser, origin, args, job) {
  const label = (job.fixture || "post") + " · " + (job.variant || "default") + " · " + args.size;
  const slug = (job.fixture || "post") + "-" + (job.variant || "default");
  const outDir = path.resolve(ROOT, args.out || path.join("out", slug));
  if (!outDir.startsWith(ROOT + path.sep)) throw new Error("--out 必须落在设计系统目录内（contact sheet 要通过同一个静态服务读 styles.css）");
  await fsp.mkdir(outDir, { recursive: true });

  const { page, report } = await renderPass(browser, origin, { ...args, ...job });
  const files = await shoot(page, outDir, { jpg: args.jpg && !args.check });
  await page.close();
  await contactSheet(browser, origin, outDir, report, "YORU 渲染验收 · " + label);
  await fsp.writeFile(path.join(outDir, "render-report.json"),
    JSON.stringify({ label, size: args.size, ...job, ...report }, null, 2), "utf8");

  const tally = printReport(label.replace("default", report.variant || "default"), report);
  console.log("   -> " + path.relative(ROOT, outDir) + "  (" + report.cards.length + " 张卡片" + (args.jpg && !args.check ? " · PNG + JPG" : "") + " + contact-sheet.png + render-report.json)");

  if (args.zip && !args.check) {
    const zipPath = path.join(outDir, slug + ".zip");
    const n = await zipDir(outDir, zipPath);
    console.log("   -> " + path.relative(ROOT, zipPath) + "  (" + n + " 个文件)");
  }
  return tally;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) { console.log(fs.readFileSync(fileURLToPath(import.meta.url), "utf8").split("*/")[0]); return 0; }

  /* Jobs. --all-fixtures reads fixtures/index.json, which records what each
     fixture is supposed to do: the negative ones fail on purpose, and a negative
     fixture that suddenly comes back clean means a check stopped working. */
  if (args.out && (args.allFixtures || args.allVariants)) {
    throw new Error("--out 不能和 --all-fixtures / --all-variants 一起用：多轮会写进同一个目录，互相覆盖");
  }

  let jobs;
  if (args.allFixtures) {
    const manifest = JSON.parse(await fsp.readFile(path.join(KIT_DIR, "fixtures", "index.json"), "utf8"));
    jobs = manifest.fixtures.map(f => ({ fixture: f.name, expect: f.expect, variant: args.variant || null }));
  } else if (args.allVariants) {
    jobs = VARIANTS.map(v => ({ variant: v, fixture: args.fixture || null }));
  } else {
    jobs = [{ variant: args.variant || null, fixture: args.fixture || null }];
  }

  const srv = await startServer(ROOT, args.port || 0);
  const browser = await chromium.launch();
  const verdicts = [];
  try {
    for (const job of jobs) {
      const tally = await runOne(browser, srv.origin, args, job);
      let ok = true, why = "";
      if (job.expect === "clean" && (tally.errors || tally.warns)) { ok = false; why = "应当零错误零告警"; }
      if (job.expect === "findings" && !tally.errors && !tally.warns) { ok = false; why = "这是负例，应当报出问题却什么都没报——检查退化了"; }
      if (!job.expect && tally.errors) { ok = false; why = tally.errors + " 个错误"; }
      verdicts.push({ name: (job.fixture || "post") + (job.variant ? " · " + job.variant : ""), ok, why });
    }
  } finally {
    await browser.close();
    await srv.close();
  }

  const bad = verdicts.filter(v => !v.ok);
  if (jobs.length > 1) {
    console.log("\n  ── 汇总 ──");
    for (const v of verdicts) console.log("   " + (v.ok ? "通过" : "未通过") + "  " + v.name + (v.why ? "  · " + v.why : ""));
  }
  if (bad.length) console.log("\n  渲染验收未通过：" + bad.length + " 项。HTML 没跑通渲染验收之前不算完成。\n");
  else console.log("\n  渲染验收通过。contact sheet 还是要亲眼看一遍。\n");
  return bad.length ? 1 : 0;
}

/* CLI usage errors get one line, not a stack trace — the stack is never the
   interesting part when you typed the flag wrong. */
try {
  process.exit(await main());
} catch (e) {
  console.error("\n  " + (e && e.message ? e.message : String(e)) + "\n");
  process.exit(2);
}
