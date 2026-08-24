import React from 'react';

const STYLE_ID = 'cds-window-style';
const css = `
.cds-win {
  display: inline-flex; flex-direction: column;
  background: var(--surface-window);
  border: 1px solid var(--ink);
  box-shadow: var(--shadow-window);
  font-family: var(--font-ui-sans);
  color: var(--ink);
  min-width: 200px;
  position: relative;
}
.cds-win.lg { box-shadow: var(--shadow-window-lg); }
.cds-win-tb {
  display: flex; align-items: center; gap: 6px;
  padding: 3px 6px;
  background: var(--titlebar-bg);
  color: var(--titlebar-fg);
  font-size: 12px;
  font-weight: 700;
  border-bottom: 1px solid var(--ink);
  user-select: none;
}
.cds-win.inactive .cds-win-tb { background: var(--titlebar-bg-inactive); color: var(--ink-soft); }
.cds-win-title { flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; letter-spacing: 0.02em; }
.cds-win-tb-stripes {
  flex: 1; height: 9px;
  background-image: repeating-linear-gradient(0deg,
    var(--titlebar-fg) 0 1px, transparent 1px 3px);
  opacity: 0.55;
  margin: 0 6px;
}
.cds-win-cb {
  width: 16px; height: 14px;
  background: var(--paper-stained);
  color: var(--ink);
  border: 1px solid var(--ink);
  box-shadow: var(--bevel-out);
  display: inline-flex; align-items: center; justify-content: center;
  font-size: 11px; line-height: 1; font-weight: 700;
  cursor: pointer;
  font-family: var(--font-pixel-mono);
  flex: none;
}
.cds-win-cb:active { box-shadow: var(--bevel-in); }
.cds-win-body { padding: 12px; }
.cds-win-body.dense { padding: 8px; }
.cds-win-body.pool  { background: var(--surface-pool); }
.cds-win-body.dream { background: var(--peach-100); }
.cds-win-status {
  padding: 2px 8px;
  font-size: 11px;
  border-top: 1px solid var(--ink);
  background: var(--paper-stained);
  box-shadow: var(--bevel-in);
  color: var(--text-muted);
  font-family: var(--font-pixel-mono);
  letter-spacing: 0.05em;
}
`;
function inject() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const s = document.createElement('style');
  s.id = STYLE_ID; s.textContent = css; document.head.appendChild(s);
}

export function Window({
  title = 'untitled',
  active = true,
  size = 'md',
  bodyTone = 'paper',
  dense = false,
  onClose,
  onMinimize,
  status,
  decorativeStripes = true,
  children,
  style,
  ...rest
}) {
  inject();
  const bodyClass = 'cds-win-body' + (dense ? ' dense' : '') + (bodyTone === 'pool' ? ' pool' : '') + (bodyTone === 'dream' ? ' dream' : '');
  return (
    <div
      className={`cds-win ${active ? '' : 'inactive'} ${size === 'lg' ? 'lg' : ''}`}
      style={style}
      {...rest}
    >
      <div className="cds-win-tb">
        <span className="cds-win-title">{title}</span>
        {decorativeStripes && <span className="cds-win-tb-stripes" aria-hidden />}
        {onMinimize && <button className="cds-win-cb" aria-label="minimize" onClick={onMinimize}>_</button>}
        {onClose && <button className="cds-win-cb" aria-label="close" onClick={onClose}>×</button>}
      </div>
      <div className={bodyClass}>{children}</div>
      {status && <div className="cds-win-status">{status}</div>}
    </div>
  );
}
