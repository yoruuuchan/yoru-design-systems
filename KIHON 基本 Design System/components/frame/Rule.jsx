import React from 'react';
/** Hairline rule, optionally with end ticks on the shared 5px tick grid — the section keyline. */
export function Rule({vertical=false, tone='line', ticks=false, style}) {
  const color=tone==='strong'?'var(--line-strong)':tone==='accent'?'var(--accent)':'var(--line)';
  if(vertical) return <div style={{width:1,minWidth:1,maxWidth:1,alignSelf:'stretch',background:color,...style}}></div>;
  const h='calc(var(--tick-h) * var(--u, 1))';
  const tick={position:'absolute',width:1,height:h,top:'calc(('+h+' / -2) + 0.5px)',background:color};
  return (
    <div style={{position:'relative',height:1,minHeight:1,maxHeight:1,flex:'1 1 auto',background:color,...style}}>
      {ticks&&<div style={{...tick,left:0}}></div>}
      {ticks&&<div style={{...tick,right:0}}></div>}
    </div>
  );
}