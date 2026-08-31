/* KIHON kit motion — preview-only approximation of the Remotion entrance ladder.
   Every role below cites a locked constant from tokens/motion.css; the springs are the
   documented CSS approximations (Remotion itself calls spring() with the measured configs). */
const F=(f)=>Math.round(f*1000/30)+'ms';

/** Role-based entrance. text · panel · solid · rule — see the ENTRANCE LADDER block in motion.css. */
function In({f=0,role='text',style,children}){
  const cls={text:'ke-text',panel:'ke-panel',solid:'ke-solid',rule:'ke-rule'}[role]||'ke-text';
  return <div className={cls} style={{animationDelay:F(f),...style}}>{children}</div>;
}

/** Numerals settle by counting, not by fading — counter 24f. */
function Count({to,f=0,decimals=0,children}){
  const [v,setV]=React.useState(0);
  React.useEffect(()=>{
    const start=performance.now()+f*1000/30, dur=800, from=0;
    let raf;
    const tick=(now)=>{
      const t=Math.max(0,Math.min(1,(now-start)/dur));
      const e=1-Math.pow(1-t,3);
      setV(from+(to-from)*e);
      if(t<1) raf=requestAnimationFrame(tick);
    };
    raf=requestAnimationFrame(tick);
    return ()=>cancelAnimationFrame(raf);
  },[to,f]);
  const shown=v.toFixed(decimals);
  return children?children(shown):shown;
}

window.KitShared={F,ms:F,In,Count};
