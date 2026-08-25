const WX = window.YORUContentDesignSystem_a0b73e;

/* ---- inline-style export -------------------------------------------------
   The WeChat editor strips <style>, class attributes and external CSS.
   We walk the rendered article, freeze the computed value of a small property
   whitelist onto each node, drop the classes, and hand back paste-ready HTML. */
const KEEP = ["font-family","font-size","font-weight","font-style","line-height","letter-spacing","color",
  "background-color","text-align","text-transform","white-space","word-break",
  "margin-top","margin-right","margin-bottom","margin-left","padding-top","padding-right","padding-bottom","padding-left",
  "border-top","border-right","border-bottom","border-left","border-radius","box-shadow","width","max-width","display","overflow"];
function inlineStyles(live) {
  const clone = live.cloneNode(true);
  const a = [live, ...live.querySelectorAll("*")], b = [clone, ...clone.querySelectorAll("*")];
  a.forEach((el, i) => {
    const cs = getComputedStyle(el);
    const out = KEEP.map(p => { const v = cs.getPropertyValue(p); return v && v !== "none" && v !== "normal" && v !== "auto" ? p + ":" + v : null; }).filter(Boolean);
    b[i].setAttribute("style", out.join(";"));
    b[i].removeAttribute("class"); b[i].removeAttribute("data-yoru");
  });
  return clone.outerHTML;
}

function Byline({ post }) {
  return <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "var(--sp-3)",
    fontFamily: "var(--font-fangsong)", fontSize: "var(--fs-caption)", letterSpacing: ".14em", color: "var(--text-muted)" }}>
    <span>{post.issue}</span>
    <span style={{ color: "var(--ink-6)" }}>·</span><span>约六分钟</span>
  </div>;
}

function Article({ post, variant }) {
  return <article className="yoru-article" data-yoru={variant} id="yoru-article"
    style={{ background: "var(--surface-page)", padding: "var(--sp-8) var(--sp-6) var(--sp-9)", display: "flex", flexDirection: "column", gap: "var(--sp-6)" }}>
    <header style={{ display: "flex", flexDirection: "column", gap: "var(--sp-4)", paddingBottom: "var(--sp-5)" }}>
      {/* 文武线 — borders, not heights: 导出冻结白名单里没有 height */}
      <div aria-hidden="true"><div style={{ borderTop: "2px solid var(--ink-1)" }} /><div style={{ borderTop: "1px solid var(--ink-1)", marginTop: 3 }} /></div>
      <div style={{ display: "flex", alignItems: "center",
        fontFamily: "var(--font-mono)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-label)", textTransform: "uppercase", color: "var(--accent)" }}>
        {post.kicker}
      </div>
      <h1 style={{ margin: 0, fontFamily: "var(--font-title)", fontWeight: 900, fontSize: "var(--fs-h1)", lineHeight: "var(--lh-h1)", color: "var(--text-title)" }}>{post.cover.title}</h1>
      <p style={{ margin: 0, fontFamily: "var(--font-fangsong)", fontSize: "var(--fs-lede)", lineHeight: "var(--lh-body)", color: "var(--ink-3)" }}>{post.cover.subtitle}</p>
      <Byline post={post} />
    </header>
    {post.blocks.map((b, i) => <YoruBlock key={i} b={b} />)}
    <footer style={{ display: "flex", flexDirection: "column", gap: "var(--sp-3)", borderTop: "1px solid var(--line-1)", paddingTop: "var(--sp-5)",
      fontFamily: "var(--font-sans-latin)", fontSize: "var(--fs-caption)", color: "var(--text-muted)" }}>
      <div style={{ fontFamily: "var(--font-title)", fontWeight: 700, fontSize: "var(--fs-h3)", color: "var(--text-title)" }}>{post.end.headline}</div>
      {post.end.lines.map((l, i) => <div key={i} style={{ display: "flex", gap: "var(--sp-2)" }}><span style={{ color: "var(--accent)" }}>—</span><span>{l}</span></div>)}
      <div style={{ marginTop: "var(--sp-3)", fontFamily: "var(--font-fangsong)", letterSpacing: ".14em" }}>
        <span>{post.issue} · 转载请注明出处</span>
      </div>
    </footer>
  </article>;
}

/* Range-selection rich-text copy.
   `navigator.clipboard.writeText(html)` writes text/plain — pasting into the
   WeChat editor drops a wall of HTML source. What the editor wants is
   text/html, and the most compatible way to hand it that is to select real
   DOM and call execCommand("copy") — the browser fills BOTH text/plain and
   text/html from the live selection. Modern `ClipboardItem` with a Blob is
   cleaner in theory but flakier against the WeChat editor's paste path in
   practice. The container is off-screen (opacity/pointer-events keep it out
   of layout & interaction), inserted just long enough to select and copy. */
function copyHtmlAsRichText(html) {
  const holder = document.createElement("div");
  holder.setAttribute("aria-hidden", "true");
  holder.style.cssText = "position:fixed;left:-99999px;top:0;opacity:0;pointer-events:none;user-select:text";
  holder.innerHTML = html;
  document.body.appendChild(holder);
  const range = document.createRange();
  range.selectNodeContents(holder);
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
  let ok = false;
  try { ok = document.execCommand("copy"); } catch { ok = false; }
  sel.removeAllRanges();
  document.body.removeChild(holder);
  return ok;
}

function WeChatKit() {
  const post = window.YORU_POST;
  const [variant, setVariant] = React.useState(post.variant);
  const [width, setWidth] = React.useState(677);
  const [copied, setCopied] = React.useState("");
  const copy = () => {
    const html = inlineStyles(document.getElementById("yoru-article"));
    const ok = copyHtmlAsRichText(html);
    setCopied(ok
      ? "已复制富文本 · " + Math.round(html.length / 1024) + "KB · 直接粘贴到公众号编辑器"
      : "复制失败，请用键盘复制屏幕上选中的部分");
    setTimeout(() => setCopied(""), 3200);
  };
  const btn = (on) => ({ padding: "6px 12px", cursor: "pointer", fontFamily: "var(--font-sans-latin)", fontSize: 12, fontWeight: 500,
    border: "1px solid " + (on ? "var(--ink-1)" : "var(--line-2)"), borderRadius: 2, background: on ? "var(--ink-1)" : "#fff", color: on ? "#fff" : "var(--ink-3)" });
  return <div style={{ minHeight: "100vh", background: "var(--paper-3)" }}>
    <header style={{ position: "sticky", top: 0, zIndex: 5, background: "rgba(255,255,255,.94)", backdropFilter: "blur(8px)",
      borderBottom: "1px solid var(--line-1)", padding: "14px 28px", display: "flex", alignItems: "center", gap: 22, flexWrap: "wrap" }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
        <b style={{ fontFamily: "var(--font-title)", fontWeight: 900, fontSize: 15, letterSpacing: ".24em", color: "var(--yoru-blue)" }}>YORU</b>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ink-4)" }}>公众号排版</span>
      </div>
      <div style={{ display: "flex", gap: 6 }}>
        {["signal", "lab", "studio", "special"].map(v => <span key={v} data-yoru={v}>
          <button onClick={() => setVariant(v)} style={{ ...btn(variant === v), display: "inline-flex", alignItems: "center", gap: 7 }}>
            <i style={{ width: 8, height: 8, borderRadius: 999, background: "var(--accent)" }} />{v}</button></span>)}
      </div>
      <div style={{ display: "flex", gap: 6 }}>
        {[677, 375].map(w => <button key={w} onClick={() => setWidth(w)} style={btn(width === w)}>{w === 677 ? "677 编辑器" : "375 手机"}</button>)}
      </div>
      <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 14 }}>
        {copied && <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".08em", color: "var(--yoru-blue)" }}>{copied}</span>}
        <button onClick={copy} style={{ padding: "7px 14px", cursor: "pointer", fontFamily: "var(--font-sans-latin)", fontSize: 12, fontWeight: 500,
          border: "1px solid var(--yoru-blue)", borderRadius: 2, background: "var(--yoru-blue)", color: "#fff" }}>复制到公众号</button>
      </div>
    </header>
    <main style={{ padding: "32px 0 80px", display: "flex", justifyContent: "center" }}>
      <div style={{ width, maxWidth: "100%", boxShadow: "0 1px 2px rgba(17,24,39,.06),0 14px 40px rgba(17,24,39,.09)" }}>
        <Article post={post} variant={variant} />
      </div>
    </main>
  </div>;
}
Object.assign(window, { WeChatKit, inlineStyles, Article });
