import React from 'react';
/** Donut arc on the ramp, hairline track. Center slot for a Numeral. */
export function Arc({value=0.6, step=4, size=200, thickness=9, label, style}) {
  const r=50-thickness/2, c=2*Math.PI*r;
  const v=Math.max(0,Math.min(1,value));
  return (
    <div style={{position:'relative',width:'calc('+size+'px * var(--u, 1))',aspectRatio:'1 / 1',...style}}>
      <svg viewBox="0 0 100 100" style={{width:'100%',height:'100%',transform:'rotate(-90deg)',display:'block'}}>
        <circle cx="50" cy="50" r={r} fill="none" stroke="var(--line)" strokeWidth={thickness}></circle>
        <circle cx="50" cy="50" r={r} fill="none" stroke={'var(--ramp-'+Math.min(4,Math.max(1,Math.round(step)))+')'} strokeWidth={thickness} strokeDasharray={c} strokeDashoffset={c*(1-v)} strokeLinecap="butt"></circle>
      </svg>
      {label&&<div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center'}}>{label}</div>}
    </div>
  );
}