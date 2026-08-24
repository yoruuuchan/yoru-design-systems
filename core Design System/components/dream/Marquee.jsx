import React from 'react';

const STYLE_ID = 'cds-marquee-style';
const css = `
@keyframes cds-marq { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.cds-marq {
  overflow: hidden;
  white-space: nowrap;
  border: 1px solid var(--ink);
  background: var(--ink);
  font-family: var(--font-pixel-display);
  font-size: 28px;
  padding: 4px 0;
  letter-spacing: 0.05em;
  position: relative;
}
.cds-marq-track {
  display: inline-flex;
  animation: cds-marq var(--cds-marq-dur, 18s) linear infinite;
  will-change: transform;
}
.cds-marq-track > span { padding: 0 24px; }
.cds-marq.rainbow .cds-marq-track > span:nth-child(7n+1) { color: var(--neon-magenta); }
.cds-marq.rainbow .cds-marq-track > span:nth-child(7n+2) { color: var(--neon-cyan); }
.cds-marq.rainbow .cds-marq-track > span:nth-child(7n+3) { color: var(--neon-lime); }
.cds-marq.rainbow .cds-marq-track > span:nth-child(7n+4) { color: var(--neon-orange); }
.cds-marq.rainbow .cds-marq-track > span:nth-child(7n+5) { color: var(--bondi-300); }
.cds-marq.rainbow .cds-marq-track > span:nth-child(7n+6) { color: var(--bubblegum-300); }
.cds-marq.rainbow .cds-marq-track > span:nth-child(7n)   { color: var(--neon-violet); }
.cds-marq.paper { background: var(--paper); }
.cds-marq.paper .cds-marq-track > span { color: var(--ink); }
@media (prefers-reduced-motion: reduce) {
  .cds-marq-track { animation: none; }
}
`;
function inject() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const s = document.createElement('style');
  s.id = STYLE_ID; s.textContent = css; document.head.appendChild(s);
}

export function Marquee({
  children,
  speed = 18,
  rainbow = true,
  tone = 'ink',
  repeat = 6,
  style,
}) {
  inject();
  const items = Array.from({ length: repeat }, (_, i) => i);
  return (
    <div
      className={`cds-marq ${rainbow ? 'rainbow' : ''} ${tone}`}
      style={{ ...style, ['--cds-marq-dur']: `${speed}s` }}
    >
      <div className="cds-marq-track">
        {items.map((i) => <span key={`a${i}`}>{children}</span>)}
        {items.map((i) => <span key={`b${i}`}>{children}</span>)}
      </div>
    </div>
  );
}
