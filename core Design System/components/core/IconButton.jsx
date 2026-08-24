import React from 'react';

const STYLE_ID = 'cds-iconbutton-style';
const css = `
.cds-ibtn {
  font-family: var(--font-ui-sans);
  border: 1px solid var(--ink);
  box-shadow: var(--bevel-out);
  background: var(--paper-stained);
  color: var(--ink);
  cursor: pointer;
  display: inline-flex; align-items: center; justify-content: center;
  flex: none;
}
.cds-ibtn:hover  { filter: brightness(1.05); }
.cds-ibtn:active { box-shadow: var(--bevel-in); transform: translate(1px, 1px); }
.cds-ibtn[disabled] { opacity: 0.45; cursor: not-allowed; }
`;
function inject() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const s = document.createElement('style');
  s.id = STYLE_ID; s.textContent = css; document.head.appendChild(s);
}
const sizes = { sm: 22, md: 28, lg: 36 };

export function IconButton({ size = 'md', label, children, ...rest }) {
  inject();
  const dim = sizes[size];
  return (
    <button
      className="cds-ibtn"
      aria-label={label}
      title={label}
      style={{ width: dim, height: dim, padding: 0 }}
      {...rest}
    >
      {children}
    </button>
  );
}
