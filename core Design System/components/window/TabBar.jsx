import React from 'react';

const STYLE_ID = 'cds-tab-style';
const css = `
.cds-tabs {
  display: flex;
  font-family: var(--font-ui-sans);
  font-size: 12px;
  gap: 0;
  border-bottom: 1px solid var(--ink);
  align-items: flex-end;
}
.cds-tab {
  padding: 4px 12px 5px;
  background: var(--paper-stained);
  color: var(--ink);
  border: 1px solid var(--ink);
  border-bottom: none;
  margin-right: -1px;
  margin-bottom: -1px;
  cursor: pointer;
  position: relative;
  user-select: none;
  letter-spacing: 0.02em;
}
.cds-tab[aria-selected="true"] {
  background: var(--paper);
  z-index: 2;
  padding-top: 6px;
  margin-top: -2px;
  box-shadow: inset 0 1px 0 var(--bevel-hi);
}
.cds-tab:not([aria-selected="true"]):hover { background: var(--sodium-100); }
`;
function inject() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const s = document.createElement('style');
  s.id = STYLE_ID; s.textContent = css; document.head.appendChild(s);
}

export function TabBar({ items, value, onChange, style }) {
  inject();
  return (
    <div className="cds-tabs" role="tablist" style={style}>
      {items.map((it) => {
        const id = typeof it === 'string' ? it : it.id;
        const label = typeof it === 'string' ? it : it.label;
        return (
          <div
            key={id}
            role="tab"
            aria-selected={value === id}
            onClick={() => onChange?.(id)}
            className="cds-tab"
          >
            {label}
          </div>
        );
      })}
    </div>
  );
}
