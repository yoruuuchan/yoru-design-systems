/* Export a self-contained frozen WeChat article — T8.
 *
 * The wechat kit's live workbench shows how the article will look and has a
 * "复制到公众号" button. But out-of-machine agents (GPT sandbox) can't touch
 * a clipboard: their only deliverable was the preview HTML, and that file
 * has <style> blocks and CSS variables and class attributes — none of which
 * survive the WeChat editor's paste path.
 *
 * This script renders the article through a real browser, freezes every
 * article-body element into inline styles (no class, no var()), and writes
 * ONE self-contained HTML file that opens anywhere and has its own top-of-page
 * copy button using the range-selection execCommand mechanism — the same
 * one article.jsx uses, and the one the reference template proved works
 * against the WeChat editor.
 *
 *   node ui_kits/wechat/export_wechat.mjs
 *   node ui_kits/wechat/export_wechat.mjs --fixture long-tutorial --variant lab
 *   node ui_kits/wechat/export_wechat.mjs --out out/my-post.html
 *
 * Options
 *   --fixture <name>   load fixtures/content.<name>.js instead of content.js
 *   --variant <id>     signal | lab | studio | special
 *   --out <path>       output file (default: out/wechat-article.frozen.html)
 *   --port <n>         static server port
 */

import { chromium } from "playwright";
import http from "node:http";
import fsp from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const KIT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(KIT_DIR, "../..");

// -------- args -------------------------------------------------------------
const args = { out: null, fixture: null, variant: null, port: 0, help: false };
for (let i = 2; i < process.argv.length; i++) {
  const k = process.argv[i];
  if (k === "--out") args.out = process.argv[++i];
  else if (k === "--fixture") args.fixture = process.argv[++i];
  else if (k === "--variant") args.variant = process.argv[++i];
  else if (k === "--port") args.port = Number(process.argv[++i]);
  else if (k === "-h" || k === "--help") args.help = true;
  else { console.error("unknown option: " + k); process.exit(2); }
}

// -------- static server (same shape as xiaohongshu/export_cards.mjs) ------
const MIME = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8",
  ".jsx": "text/javascript; charset=utf-8", ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8", ".json": "application/json; charset=utf-8",
  ".woff2": "font/woff2", ".woff": "font/woff", ".ttf": "font/ttf", ".otf": "font/otf",
  ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".svg": "image/svg+xml"
};
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
    } catch { res.writeHead(404, { "content-type": "text/plain" }).end("not found"); }
  });
  return new Promise(resolve => server.listen(port, "127.0.0.1", () =>
    resolve({ origin: "http://127.0.0.1:" + server.address().port, close: () => new Promise(r => server.close(r)) })));
}

// -------- the self-contained wrapper --------------------------------------

/* The finished file has three parts:
   1. A minimal shell (toolbar + hint bar + article container). The shell
      uses classes and normal CSS — that's fine because the WeChat editor
      only pastes what's SELECTED, and the copy button selects only the
      article container, not the shell.
   2. The article body, every element carrying its own inline style — no
      class= / no var(). That's what pastes into WeChat as rich text.
   3. A tiny inline script wired to the copy button using the same range +
      execCommand mechanism article.jsx uses (the modern ClipboardItem path
      is flakier against the WeChat editor). No frameworks, no external JS. */
function wrapFrozen(articleHtml, meta) {
  const title = meta.title || "YORU frozen article";
  return `<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${title}</title>
  <style>
    /* Shell only — the article body is fully inline-styled and does not
       depend on any of these rules. Selection stays inside #frozen so the
       toolbar/hint never end up on the clipboard. */
    :root { color-scheme: light; }
    body { margin: 0; background: #EEEFEF; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif; color: #1B2127; }
    .toolbar { position: sticky; top: 0; z-index: 5; padding: 14px 28px; background: rgba(255,255,255,.96); backdrop-filter: blur(8px); border-bottom: 1px solid #E4E7EA; display: flex; align-items: center; gap: 18px; flex-wrap: wrap; }
    .toolbar b { font-size: 13px; letter-spacing: .18em; color: #2E4A68; }
    .toolbar .meta { font-size: 12px; letter-spacing: .06em; color: #6E7681; }
    .toolbar .status { margin-left: auto; font-size: 12px; letter-spacing: .04em; color: #2E4A68; }
    button.copy { padding: 8px 18px; cursor: pointer; font-size: 13px; font-weight: 500; border: 1px solid #2E4A68; border-radius: 2px; background: #2E4A68; color: #fff; }
    button.copy:active { background: #1B2127; }
    .hint { padding: 10px 28px; background: #FFF6E5; color: #7A5A00; font-size: 13px; border-bottom: 1px solid #F1D89C; }
    .frame { max-width: 741px; margin: 28px auto; background: #F2F5F5; box-shadow: 0 2px 6px rgba(17,24,39,.06), 0 20px 60px rgba(17,24,39,.08); }
    #frozen { margin: 0; }
  </style>
</head>
<body>
  <div class="toolbar">
    <b>YORU</b><span class="meta">冻结公众号稿 · ${meta.label || ""}</span>
    <button class="copy" id="copy">复制到公众号</button>
    <span class="status" id="status"></span>
  </div>
  <div class="hint">图片需要在公众号后台重新上传；文字、样式、结构粘贴即成品。整块选中已由「复制」按钮处理，人工不需要在正文里划选。</div>
  <div class="frame">
    <div id="frozen">${articleHtml}</div>
  </div>
  <script>
    // Same range + execCommand mechanism as article.jsx. text/html + text/plain
    // both fill from the live DOM selection, which is what the WeChat editor
    // paste path consumes.
    document.getElementById("copy").addEventListener("click", function () {
      var src = document.getElementById("frozen");
      var status = document.getElementById("status");
      var sel = window.getSelection();
      sel.removeAllRanges();
      var range = document.createRange();
      range.selectNodeContents(src);
      sel.addRange(range);
      var ok = false;
      try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
      // Do not clear the selection immediately — keeping it briefly visible
      // reassures the reader that the copy grabbed the right region.
      setTimeout(function(){ sel.removeAllRanges(); }, 800);
      status.textContent = ok ? "已复制富文本 · 直接粘贴到公众号编辑器" : "复制失败：请手动选中正文再按 Ctrl+C";
      setTimeout(function(){ status.textContent = ""; }, 3600);
    });
  </script>
</body>
</html>
`;
}

// -------- main -------------------------------------------------------------

async function main() {
  if (args.help) { console.log("run: node ui_kits/wechat/export_wechat.mjs [--fixture <name>] [--variant <id>] [--out <path>]\n"); return 0; }

  const srv = await startServer(ROOT, args.port);
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({ viewport: { width: 900, height: 1400 }, deviceScaleFactor: 1 });
    const q = new URLSearchParams();
    if (args.fixture) q.set("fixture", args.fixture);
    if (args.variant) q.set("variant", args.variant);
    const url = srv.origin + "/ui_kits/wechat/index.html" + (q.toString() ? "?" + q : "");
    await page.goto(url, { waitUntil: "load" });
    /* wechat kit does not paginate, but it does load fonts. Wait for fonts
       ready — the KEEP whitelist reads computed font-family/size/line-height
       which stabilise only after webfonts settle. */
    await page.evaluate(async () => {
      await document.fonts.ready;
      const pending = Array.from(document.images).filter(i => !i.complete);
      await Promise.all(pending.map(i => new Promise(r => { i.onload = i.onerror = r; })));
      await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
    });

    // The kit apply variant via ?variant param; we can also override it in-page
    if (args.variant) await page.evaluate(v => { document.querySelector("#yoru-article").setAttribute("data-yoru", v); }, args.variant);

    const frozen = await page.evaluate(() => window.inlineStyles(document.getElementById("yoru-article")));
    const meta = await page.evaluate(() => ({
      title: (window.YORU_POST && window.YORU_POST.cover && window.YORU_POST.cover.title) || "YORU frozen article",
      variant: (window.YORU_POST && window.YORU_POST.variant) || "signal",
      issue: (window.YORU_POST && window.YORU_POST.issue) || ""
    }));

    const outRel = args.out || path.join("out", "wechat-article.frozen.html");
    const out = path.resolve(ROOT, outRel);
    await fsp.mkdir(path.dirname(out), { recursive: true });
    const html = wrapFrozen(frozen, { title: meta.title, label: meta.variant + " · " + meta.issue });
    await fsp.writeFile(out, html, "utf8");

    /* Verification (T8 acceptance). The frozen body must contain zero
       class="..." and zero var(--*) — those are exactly what does not survive
       the WeChat paste path. Fail fast if the freeze regressed. */
    const bodyRegion = frozen;
    const violations = [];
    if (/class\s*=/.test(bodyRegion)) violations.push("正文区仍有 class=");
    if (/var\(--/.test(bodyRegion)) violations.push("正文区仍有 var(--) 引用");
    if (violations.length) {
      console.error("\n  冻结产物未通过白名单：");
      for (const v of violations) console.error("   x " + v);
      return 1;
    }

    console.log("\n  已导出：" + path.relative(ROOT, out));
    console.log("   正文 " + Math.round(bodyRegion.length / 1024) + " KB · 零 class · 零 var()");
    console.log("   任何浏览器打开这个文件 → 点顶栏「复制到公众号」→ 粘贴到公众号编辑器。\n");
    await page.close();
    return 0;
  } finally {
    await browser.close();
    await srv.close();
  }
}

try { process.exit(await main()); }
catch (e) { console.error("\n  " + (e && e.message ? e.message : String(e)) + "\n"); process.exit(2); }
