import React from "react";

/* Dark code block. Optional filename bar and line numbers. Never syntax-highlighted by hand.
   Recessed like PromptBlock, but with the dark pair of stops \u2014 on ink, the low
   stop is black and the high stop is a faint white. */
export function CodeBlock({code="",lang,filename,lines=false,style,...rest}){
  const rows=String(code).replace(/\n$/,"").split("\n");
  return <div style={{borderRadius:"var(--radius-block)",overflow:"hidden",background:"var(--surface-code)",flexShrink:0,
    boxShadow:"var(--shadow-inset-dark)",...style}} {...rest}>
    {(filename||lang)&&<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",
      padding:"var(--sp-2) var(--sp-4)",borderBottom:"var(--hair) solid rgba(255,255,255,.1)",
      fontFamily:"var(--font-mono)",fontSize:"var(--fs-label)",letterSpacing:".06em",color:"rgba(255,255,255,.55)"}}>
      <span>{filename}</span><span style={{textTransform:"uppercase"}}>{lang}</span></div>}
    <pre style={{margin:0,padding:"var(--sp-4)",overflowX:"hidden",overflowY:"visible",
      fontFamily:"var(--font-mono)",fontSize:"var(--fs-code)",lineHeight:"var(--lh-code)",color:"#E8EAF0",whiteSpace:"pre-wrap",wordBreak:"break-word"}}>
      {rows.map((l,i)=><div key={i} style={{display:"flex",gap:"var(--sp-3)"}}>
        {lines&&<span style={{color:"rgba(255,255,255,.28)",userSelect:"none",flex:"none",textAlign:"right",minWidth:"2.2em"}}>{i+1}</span>}
        <code style={{flex:1}}>{l||" "}</code></div>)}
    </pre>
  </div>;
}
