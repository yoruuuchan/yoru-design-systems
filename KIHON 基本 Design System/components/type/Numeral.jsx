import React from 'react';
/** Instrument numeral in B612 Mono, tabular. Big data value or small tick. */
export function Numeral({value, unit, tick=false, color, style}) {
  return (
    <span style={{display:'inline-flex',alignItems:'baseline',gap:'0.18em',...style}}>
      <span className={tick?'k-data-tick':'k-data-value'} style={color?{color}:undefined}>{value}</span>
      {unit&&<span className="k-data-tick">{unit}</span>}
    </span>
  );
}