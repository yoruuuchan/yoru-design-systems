import React from 'react';
/** Full-frame video stage: metal ground, grain, lens falloff, safe-area padding, format-relative unit --u. */
export function Stage({format='landscape', theme='gin', grain=true, safe=false, falloff=true, children, style}) {
  const ref=React.useRef(null);
  const base=format==='portrait'?1080:1920;
  const [u,setU]=React.useState(0.35);
  React.useEffect(()=>{
    const el=ref.current; if(!el) return;
    const set=()=>setU(el.clientWidth/base);
    const ro=new ResizeObserver(set); ro.observe(el); set();
    return ()=>ro.disconnect();
  },[base]);
  const isP=format==='portrait';
  const safeX=isP?'7.5%':'6%';
  const safeY=isP?'6%':'9%';
  const none={pointerEvents:'none'};
  return (
    <div ref={ref} data-k-theme={theme==='kuro'?'kuro':undefined} style={{position:'relative',aspectRatio:isP?'9 / 16':'16 / 9',background:'var(--bg)',color:'var(--ink)',fontFamily:'var(--font-core)',overflow:'hidden','--u':u,...style}}>
      {grain&&<div style={{position:'absolute',inset:0,background:'var(--grain-url)',backgroundSize:'280px',opacity:'var(--grain-opacity)',filter:'var(--grain-invert)',...none}}></div>}
      {falloff&&<div style={{position:'absolute',inset:0,background:'var(--falloff)',...none}}></div>}
      {safe&&<div style={{position:'absolute',left:safeX,right:safeX,top:safeY,bottom:safeY,border:'1px dashed var(--accent)',opacity:.5,...none}}></div>}
      <div style={{position:'absolute',left:safeX,right:safeX,top:safeY,bottom:safeY,display:'flex',flexDirection:'column'}}>{children}</div>
    </div>
  );
}
