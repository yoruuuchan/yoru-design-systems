import React from 'react';
const PITCH=5;
/** Knurl band — 1px teeth at 5px pitch (lens focus ring). Divider, or a progress track whose
 *  boundary detents onto a tooth gap: the elapsed span never slices a tooth in half. */
export function Knurl({progress, tone='line', style}) {
  const color=tone==='strong'?'var(--line-strong)':'var(--line)';
  const ref=React.useRef(null);
  const [w,setW]=React.useState(0);
  React.useEffect(()=>{
    const el=ref.current; if(!el||progress==null) return;
    const set=()=>setW(el.clientWidth);
    const ro=new ResizeObserver(set); ro.observe(el); set();
    return ()=>ro.disconnect();
  },[progress]);
  const p=progress==null?null:Math.max(0,Math.min(1,progress));
  const snapped=p!=null&&w?Math.round(w*p/PITCH)*PITCH:null;
  return (
    <div ref={ref} style={{position:'relative',height:'var(--knurl-h)',color,background:'var(--knurl)',...style}}>
      {snapped!=null&&<div style={{position:'absolute',left:0,top:0,bottom:0,width:snapped,color:'var(--accent)',background:'var(--knurl)'}}></div>}
      {snapped!=null&&<div style={{position:'absolute',left:snapped-1,top:'-2px',bottom:'-2px',width:1,background:'var(--accent)'}}></div>}
    </div>
  );
}
