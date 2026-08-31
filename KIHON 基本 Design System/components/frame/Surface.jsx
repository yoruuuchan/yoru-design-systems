import React from 'react';
const LEVELS={plate:'k-plate',card:'k-card',control:'k-control',well:'k-well'};
/** Machined surface at one of 4 levels. Emphasis = accent edge (selected / AFTER). */
export function Surface({level='card', emphasized=false, tone='neutral', pad=true, style, children}) {
  const s={boxSizing:'border-box',position:'relative',color:'var(--ink)'};
  if(pad) s.padding='calc(34px * var(--u, 1))';
  if(tone==='accent'){s.background='var(--accent)';s.color='var(--accent-ink)';s.borderColor='var(--accent)';}
  if(emphasized){s.borderColor='var(--accent)';s.boxShadow='inset 0 0 0 1px var(--accent), var(--edge-raised), var(--shadow-card)';}
  return <div className={LEVELS[level]||LEVELS.card} style={{...s,...style}}>{children}</div>;
}