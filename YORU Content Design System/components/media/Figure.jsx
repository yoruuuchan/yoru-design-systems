import React from "react";

/* Screenshot / image frame. Empty state is an explicit placeholder, never a fake image.

   `fit` decides what happens when the image and the frame disagree:
   - "cover" (default) fills the frame and crops — right for photographs.
   - "contain" fits the whole image inside the frame — required for text
     screenshots (tweets, chat logs, code), which lose their meaning the
     moment the top or bottom is cropped away.
   `ratio="auto"` drops the fixed aspect ratio entirely and lets the image
   keep its natural proportions — the safest option for a tall screenshot. */
export function Figure({src,alt="",caption,index,treatment="frame",ratio="16 / 10",fit="cover",placeholder="拖入截图",style,...rest}){
  const framed=treatment==="frame", inset=treatment==="inset", bleed=treatment==="bleed";
  const auto=ratio==="auto"&&!bleed;
  return <figure style={{margin:0,display:"flex",flexDirection:"column",gap:"var(--sp-3)",...style}} {...rest}>
    <div style={{aspectRatio:(bleed||auto)?undefined:ratio,height:bleed?"100%":undefined,width:"100%",
      minHeight:(auto&&!src)?"var(--sp-9)":undefined,overflow:"hidden",
      borderRadius:bleed?0:"var(--radius-media)",
      border:framed?"var(--hair) solid var(--border-rule)":"none",
      background:inset?"var(--surface-inset)":"var(--paper-2)",
      boxShadow:inset||bleed?"none":"var(--shadow-media)",
      display:"flex",alignItems:"center",justifyContent:"center"}}>
      {src?<img src={src} alt={alt} style={{width:"100%",height:auto?"auto":"100%",objectFit:fit,display:"block"}}/>:
        <span style={{fontFamily:"var(--font-label)",fontSize:"var(--fs-label)",letterSpacing:"var(--ls-label)",
          textTransform:"uppercase",color:"var(--text-faint)"}}>{placeholder}</span>}
    </div>
    {caption&&<figcaption><span style={{display:"flex",gap:"var(--sp-2)",fontSize:"var(--fs-caption)",
      lineHeight:"var(--lh-tight)",color:"var(--text-muted)"}}>
      {index!=null&&<span className="yoru-num" style={{fontFamily:"var(--font-mono)",color:"var(--accent)",flex:"none"}}>{"图 "+String(index).padStart(2,"0")}</span>}
      <span>{caption}</span></span></figcaption>}
  </figure>;
}
