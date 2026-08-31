import React from 'react';
/** Media slot: recessed well, crossed hairlines, tick label. Never fake imagery. */
export function Placeholder({label='素材位', ratio='16 / 9', style}) {
  return (
    <div className="k-well" style={{aspectRatio:ratio,display:'flex',alignItems:'center',justifyContent:'center',position:'relative',overflow:'hidden',...style}}>
      <svg style={{position:'absolute',inset:0,width:'100%',height:'100%'}} preserveAspectRatio="none"><line x1="0" y1="0" x2="100%" y2="100%" stroke="var(--line)"/><line x1="100%" y1="0" x2="0" y2="100%" stroke="var(--line)"/></svg>
      <span className="k-data-tick" style={{position:'relative',background:'var(--grad-well)',padding:'0.3em 0.8em'}}>{label}</span>
    </div>
  );
}