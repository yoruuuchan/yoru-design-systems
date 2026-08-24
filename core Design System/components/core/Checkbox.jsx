import React from 'react';

const STYLE_ID = 'cds-check-style';
const css = `
.cds-check-row {
  font-family: var(--font-ui-sans);
  font-size: 12px;
  color: var(--ink);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
}
.cds-check-row input { position: absolute; opacity: 0; pointer-events: none; }
.cds-check-box {
  width: 14px; height: 14px;
  background: var(--paper);
  border: 1px solid var(--ink);
  box-shadow: var(--bevel-in);
  display: inline-flex; align-items: center; justify-content: center;
  flex: none;
  font-family: var(--font-pixel-mono);
  font-size: 14px;
  line-height: 1;
  color: var(--ink);
}
.cds-check-row input:focus-visible ~ .cds-check-box { outline: 2px solid var(--bondi-300); outline-offset: 1px; }
`;
function inject() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const s = document.createElement('style');
  s.id = STYLE_ID; s.textContent = css; document.head.appendChild(s);
}

export function Checkbox({ checked, defaultChecked, onChange, children, ...rest }) {
  inject();
  return (
    <label className="cds-check-row">
      <input
        type="checkbox"
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        {...rest}
      />
      <span className="cds-check-box">
        {(checked ?? defaultChecked) ? '×' : ''}
      </span>
      {children && <span>{children}</span>}
    </label>
  );
}
