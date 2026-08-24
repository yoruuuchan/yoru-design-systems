const WB = window.YORUContentDesignSystem_a0b73e;
const CN_D = "〇一二三四五六七八九";
const cnDate = (s) => { const m = String(s).match(/(\d{4})\D?(\d{1,2})/); if (!m) return s; const t = "零一二三四五六七八九十"; const mo = +m[2]; return m[1].split("").map(d => CN_D[+d]).join("") + "年" + (mo <= 10 ? t[mo] : "十" + t[mo - 10]) + "月"; };
const cnIss = (n) => { n = parseInt(n, 10); const t = "零一二三四五六七八九十"; return n <= 10 ? t[n] : String(n).split("").map(d => CN_D[+d]).join(""); };
const SIZES = {
  "1242x1656": { w: 1242, h: 1656, px: 96, py: 104, footer: 110, gap: 32 },
  "1080x1440": { w: 1080, h: 1440, px: 84, py: 90, footer: 96, gap: 32 },
  "1080x1350": { w: 1080, h: 1350, px: 84, py: 80, footer: 88, gap: 32 }
};
const VARIANTS = [
  { id: "signal", label: "Signal", desc: "AI 新闻 · 工具速评" },
  { id: "lab", label: "Lab", desc: "教程 · 工作流 · 排错" },
  { id: "studio", label: "Studio", desc: "创作项目 · 视觉实验" },
  { id: "special", label: "Special", desc: "FPV · 摄影 · 生活" }
];

function Chip({ active, onClick, children, dot }) {
  return <button onClick={onClick} style={{
    display: "inline-flex", alignItems: "center", gap: 7, padding: "6px 12px", cursor: "pointer",
    fontFamily: "var(--font-sans-latin)", fontSize: 12, fontWeight: 500, letterSpacing: ".02em",
    border: "1px solid " + (active ? "var(--ink-1)" : "var(--line-2)"), borderRadius: 2,
    background: active ? "var(--ink-1)" : "#fff", color: active ? "#fff" : "var(--ink-3)", transition: "background .12s,color .12s,border-color .12s"
  }}>{dot && <i style={{ width: 8, height: 8, borderRadius: 999, background: dot }} />}{children}</button>;
}

function Toolbar({ variant, setVariant, size, setSize, scale, setScale, count }) {
  return <header style={{
    position: "sticky", top: 0, zIndex: 5, background: "rgba(255,255,255,.94)", backdropFilter: "blur(8px)",
    borderBottom: "1px solid var(--line-1)", padding: "14px 28px", display: "flex", alignItems: "center", gap: 28, flexWrap: "wrap"
  }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
      <b style={{ fontFamily: "var(--font-title)", fontWeight: 900, fontSize: 15, letterSpacing: ".24em", color: "var(--yoru-blue)" }}>YORU</b>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ink-4)" }}>小红书图文台</span>
    </div>
    <div style={{ display: "flex", gap: 6 }}>
      {VARIANTS.map(v => <span key={v.id} data-yoru={v.id}>
        <Chip active={variant === v.id} onClick={() => setVariant(v.id)} dot="var(--accent)">{v.label}</Chip></span>)}
    </div>
    <div style={{ display: "flex", gap: 6 }}>
      {Object.keys(SIZES).map(s => <Chip key={s} active={size === s} onClick={() => setSize(s)}>{s}</Chip>)}
    </div>
    <label style={{ display: "flex", alignItems: "center", gap: 9, fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".1em", color: "var(--ink-4)" }}>
      缩放 <input type="range" min="18" max="60" value={scale * 100} onChange={e => setScale(e.target.value / 100)} style={{ width: 96, accentColor: "var(--yoru-blue)" }} />
      <span style={{ width: 30, color: "var(--ink-2)" }}>{Math.round(scale * 100)}%</span>
    </label>
    <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 16 }}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".1em", color: "var(--ink-4)" }}>
        自动分页 · 共 <b style={{ color: "var(--yoru-blue)" }}>{String(count).padStart(2, "0")}</b> 页
      </span>
      <button onClick={() => window.print()} style={{
        padding: "7px 14px", cursor: "pointer", fontFamily: "var(--font-sans-latin)", fontSize: 12, fontWeight: 500,
        border: "1px solid var(--yoru-blue)", borderRadius: 2, background: "var(--yoru-blue)", color: "#fff"
      }}>导出图片</button>
    </div>
  </header>;
}

function Slot({ n, total, scale, w, h, children }) {
  return <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
    <div style={{ width: w * scale, height: h * scale, overflow: "hidden", boxShadow: "0 1px 2px rgba(17,24,39,.06),0 14px 40px rgba(17,24,39,.10)" }}>
      <div style={{ transform: "scale(" + scale + ")", transformOrigin: "top left" }}>{children}</div>
    </div>
    <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".1em", color: "var(--ink-5)" }}>
      <span>{String(n).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
      <span>{n === 1 ? "COVER" : n === total ? "END" : "CONTENT"}</span>
    </div>
  </div>;
}

function Workbench() {
  const post = window.YORU_POST;
  const [variant, setVariant] = React.useState(post.variant);
  const [size, setSize] = React.useState("1242x1656");
  const [scale, setScale] = React.useState(0.3);
  const S = SIZES[size];
  const { pages, Probe } = usePagination(post.blocks, {
    variant, size, contentWidth: S.w - S.px * 2, contentHeight: S.h - S.py * 2 - S.footer, gap: S.gap
  });
  const list = pages || [];
  const total = list.length + 2;
  const foot = <WB.PageFooter note={post.issue} />;
  const wh = { w: S.w, h: S.h };

  return <div style={{ minHeight: "100vh", background: "var(--paper-3)" }}>
    {Probe}
    <Toolbar {...{ variant, setVariant, size, setSize, scale, setScale }} count={total} />
    <main style={{ padding: "36px 28px 72px", display: "flex", flexWrap: "wrap", gap: 32, alignItems: "flex-start" }}>
      <Slot n={1} total={total} scale={scale} {...wh}>
        <WB.CoverOverprint variant={variant} size={size} column={post.cover.column}
          date={post.cover.date} index={1} total={total} title={post.cover.title}
          subtitle={post.cover.subtitle} tags={post.cover.tags} aside={post.cover.aside}
          issueNumber={post.cover.issueNumber} />
      </Slot>
      {list.map((idxs, i) => <Slot key={i} n={i + 2} total={total} scale={scale} {...wh}>
        <WB.Page variant={variant} size={size} kicker={post.kicker} index={i + 2} total={total} footer={foot}
          spine={cnDate(post.cover.date) + " · 卷" + cnIss(post.cover.issueNumber) + " · " + post.cover.title}>
          {idxs.map(j => <YoruBlock key={j} b={post.blocks[j]} />)}
        </WB.Page>
      </Slot>)}
      {pages && <Slot n={total} total={total} scale={scale} {...wh}>
        <WB.EndCard variant={variant} size={size} headline={post.end.headline} lines={post.end.lines} note={post.issue} />
      </Slot>}
    </main>
  </div>;
}
Object.assign(window, { Workbench });
