import React from "react";

/* Topic tag. Shape comes from the variant: square in Signal/Lab, pill in Studio/Special. */
export function Tag({children,tone="accent",filled=false,style,...rest}){
  const c = tone==="neutral" ? "var(--ink-3)" : "var(--accent)";
  return <span style={{display:"inline-flex",alignItems:"center",gap:"var(--sp-1)",
    fontFamily:"var(--font-ui)",fontWeight:500,fontSize:"var(--fs-label)",letterSpacing:".06em",
    padding:"var(--sp-1) var(--sp-3)",borderRadius:"var(--radius-tag)",
    color:filled?"#fff":c,background:filled?c:"transparent",border:filled?"none":"var(--hair) solid "+ (tone==="neutral"?"var(--border-rule)":"var(--accent-hair)"),
    ...style}} {...rest}>{children}</span>;
}
