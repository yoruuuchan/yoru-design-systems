import React from "react";

/* A prompt is quotable content, not code: light ground, mono face, copy affordance.
   Recessed rather than outlined \u2014 the inset shading says "lift this out of the
   page", which is what a prompt is for. A recessed block takes no outer border;
   the shading is the edge. */
export function PromptBlock({label="提示词 · 可抄",model,children,style,...rest}){
  return <div style={{borderRadius:"var(--radius-block)",boxShadow:"var(--shadow-inset)",flexShrink:0,
    background:"var(--accent-soft)",display:"flex",flexDirection:"column",...style}} {...rest}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"var(--sp-3)",
      padding:"var(--sp-2) var(--sp-4)",borderBottom:"var(--hair) solid var(--accent-hair)",
      fontFamily:"var(--font-sans-cjk)",fontWeight:700,fontSize:"var(--fs-label)",letterSpacing:".2em",color:"var(--accent-ink)"}}>
      <span>{label}</span>{model&&<span style={{fontWeight:400,fontFamily:"var(--font-fangsong)",color:"var(--text-muted)",letterSpacing:".05em"}}>{model}</span>}
    </div>
    <div style={{padding:"var(--sp-4)",fontFamily:"var(--font-fangsong)",fontSize:"var(--fs-body)",
      lineHeight:"var(--lh-body)",color:"var(--ink-2)",whiteSpace:"pre-wrap"}}>{children}</div>
  </div>;
}
