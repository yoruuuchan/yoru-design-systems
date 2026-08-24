import React from "react";

/* Numbered walkthrough，铅字房版：汉字编号 壹貳叁，宋体，变体深色。Steps are separated
   by a hairline ABOVE each one — the numeral column itself is the structure. */
const CN_STEP = ["壹", "貳", "叁", "肆", "伍", "陸", "柒", "捌", "玖", "拾"];
export function StepList({steps=[],start=1,style,...rest}){
  return <ol style={{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:"var(--sp-4)",...style}} {...rest}>
    {steps.map((s,i)=>(
      <li key={i} style={{display:"grid",gridTemplateColumns:"auto 1fr",gap:"var(--sp-4)",alignItems:"start",
        borderTop:i?"var(--hair) solid var(--border-hair)":"none",paddingTop:i?"var(--sp-4)":0}}>
        <span style={{fontFamily:"var(--font-title)",fontWeight:700,fontSize:"var(--fs-h3)",
          lineHeight:"var(--lh-tight)",color:"var(--text-accent)"}}>
          {CN_STEP[start+i-1] ?? String(start+i)}</span>
        <div style={{display:"flex",flexDirection:"column",gap:"var(--sp-2)"}}>
          <div style={{fontFamily:"var(--font-title)",fontWeight:700,fontSize:"var(--fs-h3)",lineHeight:"var(--lh-tight)",color:"var(--text-title)"}}>{s.title}</div>
          {s.body&&<div style={{fontSize:"var(--fs-body)",lineHeight:"var(--lh-body)",color:"var(--ink-3)"}}>{s.body}</div>}
          {s.extra}
        </div>
      </li>
    ))}
  </ol>;
}
