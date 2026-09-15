import React from "react";

/* The 01 / 06 corner mark. Also used as a run-in numeral for sections. */
export function SectionMark({index,total,label,size="md",style,...rest}){
  const fs = size==="lg"?"var(--fs-h3)":"var(--fs-label)";
  return <div style={{display:"inline-flex",alignItems:"baseline",gap:"var(--sp-2)",
    fontFamily:"var(--font-label)",fontSize:fs,letterSpacing:"var(--ls-label)",textTransform:"uppercase",color:"var(--text-faint)",...style}} {...rest}>
    <span className="yoru-num" style={{color:"var(--accent)",fontWeight:500}}>
      {String(index).padStart(2,"0")}{total?<span style={{color:"var(--text-faint)"}}>{" / "+String(total).padStart(2,"0")}</span>:null}
    </span>
    {label&&<span>{label}</span>}
  </div>;
}
