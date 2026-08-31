import React from 'react';
/** Tracked uppercase label. Plain by default: no tick, no rule — opt into the hairline with rule. */
export function Label({children, index, rule=false, style}) {
  return (
    <div style={{display:'flex',alignItems:'center',gap:'calc(16px * var(--u, 1))',...style}}>
      <span className="k-label">{children}</span>
      {rule&&<span style={{flex:1,height:1,background:'var(--line)'}}></span>}
      {index&&<span className="k-data-tick" style={{marginLeft:rule?0:'auto'}}>{index}</span>}
    </div>
  );
}