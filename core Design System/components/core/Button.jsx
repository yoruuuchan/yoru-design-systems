import React from 'react';

const STYLE_ID = 'cds-button-style';
const css = `
.cds-btn {
  font-family: var(--font-ui-sans);
  font-weight: 700;
  border: 1px solid var(--ink);
  box-shadow: var(--bevel-out);
  cursor: pointer;
  text-align: center;
  letter-spacing: 0.02em;
  color: var(--ink);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  user-select: none;
  transition: filter var(--dur-snap) var(--ease-snap);
}
.cds-btn:hover  { filter: brightness(1.05); }
.cds-btn:active { box-shadow: var(--bevel-in); transform: translate(1px, 1px); }
.cds-btn[disabled] { opacity: 0.45; cursor: not-allowed; box-shadow: var(--bevel-out); transform: none; }
.cds-btn.glow:hover { box-shadow: var(--bevel-out), var(--glow-bondi); }
.cds-btn:focus-visible { outline: 2px solid var(--bondi-300); outline-offset: 2px; }
`;
function inject() {
  if (typeof document === 'undefined') return;
  if (document.getElementById(STYLE_ID)) return;
  const s = document.createElement('style');
  s.id = STYLE_ID; s.textContent = css; document.head.appendChild(s);
}

const sizes = {
  sm: { padding: '2px 10px', fontSize: 11, minHeight: 22 },
  md: { padding: '4px 14px', fontSize: 13, minHeight: 28 },
  lg: { padding: '8px 22px', fontSize: 15, minHeight: 36 },
};
const variants = {
  primary:   { background: 'var(--bondi-500)', color: 'var(--frost-50)' },
  secondary: { background: 'var(--chrome-100)' },
  ghost:     { background: 'transparent', boxShadow: 'none', border: '1px dashed var(--ink-muted)' },
  pool:      { background: 'var(--bondi-200)' },
  dream:     { background: 'var(--bubblegum-300)' },
  danger:    { background: 'var(--bubblegum-500)', color: 'var(--frost-50)' },
  sodium:    { background: 'var(--sodium-300)' },
};

export function Button({
  variant = 'secondary',
  size = 'md',
  glow = false,
  children,
  ...rest
}) {
  inject();
  return (
    <button
      className={`cds-btn ${glow ? 'glow' : ''}`}
      style={{ ...sizes[size], ...variants[variant] }}
      {...rest}
    >
      {children}
    </button>
  );
}
