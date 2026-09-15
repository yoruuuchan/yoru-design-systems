import React from "react";

export function Caption({children,index,align="start",style,...rest}){
  return <div style={{display:"flex",gap:"var(--sp-2)",alignItems:"baseline",justifyContent:align==="center"?"center":"flex-start",
    fontFamily:"var(--font-body)",fontSize:"var(--fs-caption)",lineHeight:"var(--lh-tight)",color:"var(--text-muted)",...style}} {...rest}>
    {index!=null&&<span className="yoru-num" style={{fontFamily:"var(--font-mono)",color:"var(--accent)",flex:"none"}}>
      {"图 "+String(index).padStart(2,"0")}</span>}
    <span>{children}</span>
  </div>;
}
