/* Shared primitives. Loaded after React, before view components. */

function Avatar({ kind = "akari", size = 40, glyph = "灯", children }) {
  const className = `avatar sz-${size === 40 ? 40 : size === 32 ? 32 : 28} ${kind}`;
  return <div className={className}>{children || glyph}</div>;
}

function Toggle({ on, onChange, disabled }) {
  return (
    <button
      type="button"
      className={`toggle ${on ? "on" : "off"}`}
      onClick={() => !disabled && onChange && onChange(!on)}
      disabled={disabled}
      aria-pressed={on}
    >
      <span className="knob" />
    </button>
  );
}

function Chip({ on, onClick, children }) {
  return (
    <button type="button" className={`chip ${on ? "on" : ""}`} onClick={onClick}>{children}</button>
  );
}

function Button({ variant = "secondary", size, icon, children, ...rest }) {
  const cls = ["btn", variant, size === "sm" ? "sm" : "", icon && !children ? "icon" : ""].filter(Boolean).join(" ");
  return <button className={cls} {...rest}>{icon && <Icon name={icon} size={14} stroke={2} />}{children}</button>;
}

function IconButton({ name, raised, ...rest }) {
  return (
    <button className={`icon-btn ${raised ? "raised" : ""}`} {...rest}>
      <Icon name={name} size={18} stroke={1.75} />
    </button>
  );
}

function Dot({ kind = "info", title }) {
  return <span className={`dot ${kind}`} title={title} />;
}

function SectionHeader({ children, meta }) {
  return (
    <div className="section-h">
      <span className="lbl">{children}</span>
      {meta && <span className="meta">{meta}</span>}
    </div>
  );
}

function SettingsGroup({ title, right, children }) {
  return (
    <div className="settings-group">
      {title && <div className="grp-h"><span>{title}</span>{right && <span className="right">{right}</span>}</div>}
      {children}
    </div>
  );
}

function SettingRow({ icon, label, sub, value, control, onClick, disabled, danger }) {
  return (
    <button type="button" className="setting-row" onClick={onClick} disabled={disabled}>
      {icon && <span className="ico" style={danger ? { background: "var(--error-100)", color: "var(--error-700)" } : null}><Icon name={icon} size={15} stroke={1.75} /></span>}
      <span className="lbl">
        <span style={danger ? { color: "var(--error-700)" } : null}>{label}</span>
        {sub && <small>{sub}</small>}
      </span>
      {value && <span className="val">{value}</span>}
      {control}
      {!control && onClick && <span className="chev"><Icon name="chevron-right" size={16} /></span>}
    </button>
  );
}

function Empty({ icon, title, sub }) {
  return (
    <div className="empty">
      <div className="ico-w"><Icon name={icon} size={24} stroke={1.6} /></div>
      <div className="hd">{title}</div>
      {sub && <div className="sb">{sub}</div>}
    </div>
  );
}

function Toast({ children, onClose }) {
  React.useEffect(() => {
    const t = setTimeout(() => onClose && onClose(), 1800);
    return () => clearTimeout(t);
  }, [onClose]);
  return (
    <div className="toast">
      <span className="dot ok" /> {children}
    </div>
  );
}

Object.assign(window, { Avatar, Toggle, Chip, Button, IconButton, Dot, SectionHeader, SettingsGroup, SettingRow, Empty, Toast });
