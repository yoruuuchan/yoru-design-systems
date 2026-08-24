import React from 'react';

const STYLE_ID = 'cds-input-style';
const css = `
.cds-input-wrap {
  font-family: var(--font-ui-sans);
  font-size: 13px;
  display: inline-flex;
  flex-direction: column;
  gap: 3px;
}
.cds-input-label {
  color: var(--ink);
  letter-spacing: 0.02em;
}
.cds-input {
  font-family: var(--font-body-serif);
  font-size: 15px;
  background: var(--paper);
  color: var(--ink);
  border: 1px solid var(--ink);
  box-shadow: var(--bevel-in);
  padding: 4px 8px;
  outline: none;
  min-width: 0;
  width: 100%;
  box-sizing: border-box;
}
.cds-input:focus { background: var(--bondi-50); box-shadow: var(--bevel-in), 0 0 0 2px var(--bondi-300); }
.cds-input::placeholder { color: var(--ink-faint); font-style: italic; }
.cds-input.mono { font-family: var(--font-pixel-mono); font-size: 14px; }
`;
function inject() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const s = document.createElement('style');
  s.id = STYLE_ID; s.textContent = css; document.head.appendChild(s);
}

export function Input({ label, mono = false, style, wrapStyle, ...rest }) {
  inject();
  return (
    <label className="cds-input-wrap" style={wrapStyle}>
      {label && <span className="cds-input-label">{label}</span>}
      <input
        className={`cds-input ${mono ? 'mono' : ''}`}
        style={style}
        {...rest}
      />
    </label>
  );
}
