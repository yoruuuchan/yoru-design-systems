import React from "react";

/* Serif display headings. Level 1 is a page title, 2 a section, 3 a run-in.
   `mark` prints a heavy rule ABOVE the heading. There is no left-hand accent bar
   anywhere in this system — hierarchy comes from type, space and horizontal rules. */
export function Heading({level=2,children,mark=false,kicker,style,...rest}){
  const size = {1:"var(--fs-h1)",2:"var(--fs-h2)",3:"var(--fs-h3)"}[level];
  const lh = {1:"var(--lh-h1)",2:"var(--lh-h2)",3:"var(--lh-tight)"}[level];
  const Tag = "h"+level;
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"var(--sp-2)"}}>
      {mark&&<span style={{display:"block",width:"100%",height:"var(--bar)",background:"var(--border-strong)",marginBottom:"var(--sp-1)"}}/>}
      {kicker&&<span style={{fontFamily:"var(--font-label)",fontSize:"var(--fs-label)",letterSpacing:"var(--ls-label)",
        textTransform:"uppercase",color:"var(--text-accent)"}}>{kicker}</span>}
      <Tag style={{margin:0,fontFamily:"var(--font-title)",fontWeight:level===1?900:700,fontSize:size,lineHeight:lh,
        letterSpacing:"var(--ls-title)",color:"var(--text-title)",...style}} {...rest}>{children}</Tag>
    </div>
  );
}
