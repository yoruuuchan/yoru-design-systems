import React from "react";

export function ReferenceList({items=[],title="参考",style,...rest}){
  return <div style={{display:"flex",flexDirection:"column",gap:"var(--sp-3)",...style}} {...rest}>
    {title&&<div style={{fontFamily:"var(--font-label)",fontSize:"var(--fs-label)",letterSpacing:"var(--ls-label)",
      textTransform:"uppercase",color:"var(--text-faint)",borderBottom:"var(--hair) solid var(--border-hair)",paddingBottom:"var(--sp-2)"}}>{title}</div>}
    <ol style={{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:"var(--sp-2)"}}>
      {items.map((it,i)=>(<li key={i} style={{display:"grid",gridTemplateColumns:"auto 1fr",gap:"var(--sp-3)",
        fontSize:"var(--fs-caption)",lineHeight:"var(--lh-tight)",color:"var(--ink-3)"}}>
        <span className="yoru-num" style={{color:"var(--accent)"}}>{"["+(i+1)+"]"}</span>
        <span>{it.title}{it.source&&<span style={{color:"var(--text-faint)"}}>{" · "+it.source}</span>}
        {it.url&&<span style={{display:"block",fontFamily:"var(--font-mono)",fontSize:"0.92em",color:"var(--text-faint)",wordBreak:"break-all"}}>{it.url}</span>}</span>
      </li>))}
    </ol>
  </div>;
}
