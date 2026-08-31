import React from 'react';
/** Legend for the 4-step lightness ramp. */
export function Ramp({labels, style}) {
  return (
    <div style={{display:'flex',alignItems:'center',gap:'calc(14px * var(--u, 1))',...style}}>
      {[1,2,3,4].map(i=>(
        <span key={i} style={{display:'inline-flex',alignItems:'center',gap:'0.4em'}}>
          <span style={{width:'calc(18px * var(--u, 1))',height:'calc(18px * var(--u, 1))',background:'var(--ramp-'+i+')',borderRadius:'calc(3px * var(--u, 1))',boxShadow:'var(--edge-raised)'}}></span>
          {labels&&labels[i-1]&&<span className="k-data-tick">{labels[i-1]}</span>}
        </span>
      ))}
    </div>
  );
}