function LogsDrawer({ logs }) {
  const [open, setOpen] = React.useState(() => new Set(logs.filter(l => l.error).map(l => l.id)));
  const toggle = (id) => {
    const s = new Set(open);
    s.has(id) ? s.delete(id) : s.add(id);
    setOpen(s);
  };
  return (
    <div>
      <SectionHeader meta={`${logs.length} entries · ${logs.filter(l => l.error).length} errors`}>logs</SectionHeader>
      {logs.map((l) => {
        const isOpen = open.has(l.id);
        return (
          <React.Fragment key={l.id}>
            <button className="log-row" onClick={() => toggle(l.id)}>
              <span className="lt">
                <span className={`chev-i ${isOpen ? "open" : ""}`} />
                <span className="msg">{l.time}  {l.kind} · {l.label}</span>
              </span>
              <span className="rt">
                {l.error && <Dot kind="err" />}
                {l.right}
              </span>
            </button>
            {isOpen && (
              <div className="log-detail">
                {l.fields.map((f, i) => (
                  <div key={i}>
                    <span className="k">{f.k.padEnd(10, " ")}</span>{" "}
                    <span className={f.err ? "e" : "v"}>{f.v}</span>
                  </div>
                ))}
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

Object.assign(window, { LogsDrawer });
