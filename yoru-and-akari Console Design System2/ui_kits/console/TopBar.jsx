function TopBar({ title, glyph, theme, onToggleTheme, onOpenSheet, glass = true, leading, trailing }) {
  return (
    <div className={`top-bar ${glass ? "glass" : ""}`}>
      <div className="title">
        {leading || (glyph && (
          <div className="av">{glyph}</div>
        ))}
        <button onClick={onOpenSheet} style={{ all: "unset", cursor: onOpenSheet ? "pointer" : "default", display: "inline-flex", alignItems: "center", gap: 6 }}>
          {title}
          {onOpenSheet && <Icon name="chevron-down" size={14} stroke={2} />}
        </button>
      </div>
      <div className="actions">
        {trailing}
        <IconButton name={theme === "yoru" ? "moon" : "sun"} onClick={onToggleTheme} title="theme" />
      </div>
    </div>
  );
}

function TabBar({ active, onChange }) {
  const tabs = [
    { id: "chat", icon: "message-square-text", label: "chat" },
    { id: "timeline", icon: "clock", label: "timeline" },
    { id: "memory", icon: "brain", label: "memory" },
    { id: "console", icon: "settings", label: "console" },
  ];
  return (
    <div className="tab-bar">
      {tabs.map(t => (
        <button key={t.id} className={`tab ${active === t.id ? "active" : ""}`} onClick={() => onChange(t.id)}>
          <Icon name={t.icon} size={18} stroke={1.75} />
          <span className="lbl-txt">{t.label}</span>
        </button>
      ))}
    </div>
  );
}

function StatusBar({ theme }) {
  return (
    <div className="status-bar">
      <span>14:02</span>
      <span className="right">
        <Icon name="signal" size={14} stroke={2} />
        <Icon name="wifi" size={14} stroke={2} />
        <Icon name="battery-full" size={16} stroke={2} />
      </span>
    </div>
  );
}

Object.assign(window, { TopBar, TabBar, StatusBar });
