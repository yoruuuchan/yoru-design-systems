function ProviderSheet({ open, providers, activeId, onPick, onClose }) {
  if (!open) return null;
  return (
    <div className="sheet-scrim" onClick={onClose}>
      <div className="sheet" onClick={(e) => e.stopPropagation()}>
        <div className="handle" />
        <h3>model provider</h3>
        {providers.map(p => (
          <button key={p.id} className={`provider-row ${activeId === p.id ? "selected" : ""}`} onClick={() => { onPick(p.id); onClose(); }}>
            <div className="logo">{p.short}</div>
            <div className="meta">
              <div className="nm">
                {p.name}
                {p.status === "ok" && <Dot kind="ok" />}
                {p.status === "err" && <Dot kind="err" />}
                {p.status === "draft" && <Dot kind="warn" />}
              </div>
              <div className="sub">{p.detail}</div>
            </div>
            <Icon name="chevron-right" size={16} />
          </button>
        ))}
        <button className="btn ghost" style={{ width: "100%", justifyContent: "center", marginTop: 6 }} onClick={onClose}>
          <Icon name="plus" size={14} stroke={2} /> add provider
        </button>
      </div>
    </div>
  );
}

Object.assign(window, { ProviderSheet });
