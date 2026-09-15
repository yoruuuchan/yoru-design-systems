import React from "react";

/* Hairline comparison table. Column 1 is the criterion, the rest are the things compared. */
export function CompareTable({columns=[],rows=[],highlight,caption,style,...rest}){
  const cell={padding:"var(--sp-3) var(--sp-3)",textAlign:"left",verticalAlign:"top",fontSize:"var(--fs-small)",lineHeight:"var(--lh-tight)"};
  return <div style={{display:"flex",flexDirection:"column",gap:"var(--sp-2)",...style}} {...rest}>
    <table style={{width:"100%",borderCollapse:"collapse",fontFamily:"var(--font-body)"}}>
      <thead><tr>{columns.map((c,i)=>(
        <th key={i} style={{...cell,fontFamily:"var(--font-ui)",fontWeight:600,color:i===highlight?"var(--accent-ink)":"var(--text-title)",
          background:i===highlight?"var(--accent-soft)":"transparent",
          borderBottom:"var(--rule) solid var(--border-strong)",whiteSpace:"nowrap"}}>{c}</th>))}</tr></thead>
      <tbody>{rows.map((r,ri)=>(<tr key={ri}>{r.map((v,ci)=>(
        <td key={ci} style={{...cell,borderBottom:"var(--hair) solid var(--border-hair)",
          color:ci===0?"var(--text-muted)":"var(--ink-2)",fontWeight:ci===0?500:400,
          background:ci===highlight?"var(--accent-soft)":"transparent"}}>{v}</td>))}</tr>))}</tbody>
    </table>
    {caption&&<div style={{fontSize:"var(--fs-caption)",color:"var(--text-muted)"}}>{caption}</div>}
  </div>;
}
