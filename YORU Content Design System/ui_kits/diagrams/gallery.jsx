const DG = window.YORUContentDesignSystem_a0b73e;

function Rail({ items, sel, setSel }) {
  return <nav style={{ width: 232, flex: "none", borderRight: "1px solid var(--line-1)", padding: "22px 0", display: "flex", flexDirection: "column", gap: 2 }}>
    <div className="rl" style={{ padding: "0 22px 12px" }}>图谱类型</div>
    {items.map((d, i) => (
      <button key={d.id} onClick={() => setSel(i)} style={{
        textAlign: "left", padding: "10px 22px", cursor: "pointer", border: "none",
        background: sel === i ? "var(--paper-3)" : "transparent", fontFamily: "var(--font-body)", fontSize: 13,
        fontWeight: sel === i ? 500 : 400, color: sel === i ? "var(--ink-1)" : "var(--ink-3)"
      }}>{d.label}</button>
    ))}
    <div className="rl" style={{ padding: "20px 22px 0", lineHeight: 1.8 }}>
      节点与边是数据，<br />坐标与颜色不是。
    </div>
  </nav>;
}

function SpecPanel({ spec }) {
  const json = JSON.stringify(spec, null, 2);
  const [open, setOpen] = React.useState(true);
  return <section style={{ display: "flex", flexDirection: "column", gap: 10 }}>
    <button onClick={() => setOpen(o => !o)} style={{
      alignSelf: "flex-start", display: "flex", alignItems: "center", gap: 8, padding: 0, border: "none", background: "none", cursor: "pointer",
      fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--ink-4)"
    }}>{open ? "—" : "+"} 这张图的输入数据</button>
    {open && <DG.CodeBlock lang="json" filename="diagram.spec.json" code={json} />}
  </section>;
}

function DiagramGallery() {
  const items = window.YORU_DIAGRAMS;
  const [sel, setSel] = React.useState(0);
  const [theme, setTheme] = React.useState("light");
  const d = items[sel];
  const [variant, setVariant] = React.useState(d.variant);
  React.useEffect(() => setVariant(d.variant), [sel]);
  const dark = theme === "dark";
  const btn = on => ({ padding: "6px 12px", cursor: "pointer", fontFamily: "var(--font-sans-latin)", fontSize: 12, fontWeight: 500,
    border: "1px solid " + (on ? "var(--ink-1)" : "var(--line-2)"), borderRadius: 2, background: on ? "var(--ink-1)" : "#fff", color: on ? "#fff" : "var(--ink-3)" });

  return <div style={{ minHeight: "100vh", background: "#fff", display: "flex", flexDirection: "column" }}>
    <header style={{ borderBottom: "1px solid var(--line-1)", padding: "14px 28px", display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
        <b style={{ fontFamily: "var(--font-title)", fontWeight: 900, fontSize: 15, letterSpacing: ".24em", color: "var(--yoru-blue)" }}>YORU</b>
        <span className="rl">图谱系统</span>
      </div>
      <div style={{ display: "flex", gap: 6 }}>
        {["signal", "lab", "studio", "special"].map(v => <span key={v} data-yoru={v}>
          <button onClick={() => setVariant(v)} style={{ ...btn(variant === v), display: "inline-flex", alignItems: "center", gap: 7 }}>
            <i style={{ width: 8, height: 8, borderRadius: 999, background: "var(--accent)" }} />{v}</button></span>)}
      </div>
      <div style={{ display: "flex", gap: 6 }}>
        {["light", "dark"].map(t => <button key={t} onClick={() => setTheme(t)} style={btn(theme === t)}>{t}</button>)}
      </div>
      <span className="rl" style={{ marginLeft: "auto" }}>nodes + edges → HTML / SVG</span>
    </header>
    <div style={{ display: "flex", alignItems: "stretch", flex: 1 }}>
      <Rail items={items} sel={sel} setSel={setSel} />
      <main data-yoru={variant} style={{ flex: 1, minWidth: 0, padding: "30px 34px 70px", display: "flex", flexDirection: "column", gap: 26 }}>
        <div style={{ padding: 30, background: dark ? "#0E1014" : "#fff", border: "1px solid " + (dark ? "#0E1014" : "var(--line-1)") }}>
          {d.kind === "timeline"
            ? <DG.Timeline {...d.spec} theme={theme} />
            : <DG.Diagram {...d.spec} theme={theme} />}
        </div>
        <div className="yoru-article"><SpecPanel spec={d.spec} /></div>
      </main>
    </div>
  </div>;
}
Object.assign(window, { DiagramGallery });
