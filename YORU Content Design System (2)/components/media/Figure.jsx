import React from "react";

/* Screenshot / image frame. Empty state is an explicit placeholder, never a fake image. */
export function Figure({src,alt="",caption,index,treatment="frame",ratio="16 / 10",placeholder="拖入截图",style,...rest}){
  const framed=treatment==="frame", inset=treatment==="inset", bleed=treatment==="bleed";
  return <figure style={{margin:0,display:"flex",flexDirection:"column",gap:"var(--sp-3)",...style}} {...rest}>
    <div style={{aspectRatio:bleed?undefined:ratio,height:bleed?"100%":undefined,width:"100%",overflow:"hidden",
      borderRadius:bleed?0:"var(--radius-media)",
      border:framed?"var(--hair) solid var(--border-rule)":"none",
      background:inset?"var(--surface-inset)":"var(--paper-2)",
      boxShadow:inset||bleed?"none":"var(--shadow-media)",
      display:"flex",alignItems:"center",justifyContent:"center"}}>
      {src?<img src={src} alt={alt} style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>:
        <span style={{fontFamily:"var(--font-label)",fontSize:"var(--fs-label)",letterSpacing:"var(--ls-label)",
          textTransform:"uppercase",color:"var(--text-faint)"}}>{placeholder}</span>}
    </div>
    {caption&&<figcaption><span style={{display:"flex",gap:"var(--sp-2)",fontSize:"var(--fs-caption)",
      lineHeight:"var(--lh-tight)",color:"var(--text-muted)"}}>
      {index!=null&&<span className="yoru-num" style={{fontFamily:"var(--font-mono)",color:"var(--accent)",flex:"none"}}>{"图 "+String(index).padStart(2,"0")}</span>}
      <span>{caption}</span></span></figcaption>}
  </figure>;
}
