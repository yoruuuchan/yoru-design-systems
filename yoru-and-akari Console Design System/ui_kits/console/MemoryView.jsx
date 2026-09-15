function MemoryView({ longTerm, shortTerm }) {
  return (
    <div>
      <SectionHeader meta={`${longTerm.length + shortTerm.length} entries`}>memory</SectionHeader>
      <div className="grp-h" style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-3)", padding: "4px 4px 6px" }}>long-term · 記憶</div>
      {longTerm.map((m, i) => (
        <div className="mem-card" key={"l"+i}>
          <div className="head">
            <span className="nm">{m.title}</span>
            <span className="conf"><span className="dot" style={{ background: "var(--success-500)" }} />{m.confidence.toFixed(2)}</span>
          </div>
          <div className="body">{m.body}</div>
          <div className="foot">
            <span>added {m.added}</span>
            <span>·</span>
            <span>recalled {m.recalled}×</span>
          </div>
        </div>
      ))}
      <div className="grp-h" style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-3)", padding: "12px 4px 6px" }}>short-term · context window</div>
      {shortTerm.map((m, i) => (
        <div className="mem-card" key={"s"+i}>
          <div className="head">
            <span className="nm">{m.title}</span>
            <span className="conf"><span className="dot" style={{ background: "var(--info-500)" }} />{m.tokens} tok</span>
          </div>
          <div className="body">{m.body}</div>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, { MemoryView });
