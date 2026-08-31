import React from 'react';
const MARKS={after:'✓',before:'✗',active:'●'};
/** State chip. States are the ONLY place accent appears: selected/active/after. */
export function Chip({state='neutral', children, style}) {
  const s={display:'inline-flex',alignItems:'center',gap:'0.45em',fontFamily:'var(--font-core)',fontSize:'calc(30px * var(--u, 1))',fontWeight:500,lineHeight:1,padding:'0.42em 0.85em',borderRadius:'var(--radius-chip)',border:'1px solid var(--line)',color:'var(--ink-muted)',background:'transparent',whiteSpace:'nowrap'};
  if(state==='selected'){Object.assign(s,{background:'var(--accent)',color:'var(--accent-ink)',borderColor:'var(--accent)',boxShadow:'var(--edge-raised), var(--shadow-control)'});}
  if(state==='active'||state==='after'){Object.assign(s,{background:'var(--accent-soft)',color:'var(--accent)',borderColor:'var(--accent)'});}
  if(state==='before'){Object.assign(s,{color:'var(--negative)'});}
  const mark=MARKS[state];
  return <span style={{...s,...style}}>{mark&&<span aria-hidden="true">{mark}</span>}{children}</span>;
}