import React from 'react';
/** Data bar on the lightness ramp — never hue. The growing face carries a machined cap. */
export function Bar({value=1, step=4, direction='up', thickness, cap, style}) {
  const pct=(Math.max(0,Math.min(1,value))*100)+'%';
  const s=Math.min(4,Math.max(1,Math.round(step)));
  const color='var(--ramp-'+s+')';
  const r='calc(4px * var(--u, 1))';
  if(direction==='right'){
    return (
      <div style={{display:'flex',alignItems:'center',gap:'calc(16px * var(--u, 1))',...style}}>
        <div style={{width:pct,height:thickness||'calc(56px * var(--u, 1))',background:color,borderRadius:'0 '+r+' '+r+' 0',boxShadow:'var(--bar-cap-right-'+s+')'}}></div>
        {cap&&<span className="k-data-tick" style={{color:'var(--ink)'}}>{cap}</span>}
      </div>
    );
  }
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-end',gap:'calc(12px * var(--u, 1))',height:'100%',...style}}>
      {cap&&<span className="k-data-tick" style={{color:'var(--ink)'}}>{cap}</span>}
      <div style={{height:pct,width:thickness||'100%',background:color,borderRadius:r+' '+r+' 0 0',boxShadow:'var(--bar-cap-up-'+s+')'}}></div>
    </div>
  );
}