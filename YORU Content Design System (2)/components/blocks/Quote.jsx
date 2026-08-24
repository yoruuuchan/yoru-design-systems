import React from "react";

/* Pull quote, 铅字房版：一枚大号「引导，收尾的」贴回句末，无横线无竖线。
   引号是变体深色，句子是宋体中字重。 */
export function Quote({children,cite,source,style,...rest}){
  return <figure style={{margin:0,display:"flex",gap:"var(--sp-4)",...style}} {...rest}>
    <span aria-hidden="true" style={{fontFamily:"var(--font-title)",fontWeight:900,fontSize:"var(--fs-h2)",
      lineHeight:1,color:"var(--text-accent)",flex:"none"}}>「</span>
    <div style={{display:"flex",flexDirection:"column",gap:"var(--sp-3)",paddingTop:"0.18em"}}>
      <blockquote style={{margin:0,fontFamily:"var(--font-title)",fontWeight:500,fontSize:"var(--fs-h3)",
        lineHeight:"var(--lh-h2)",color:"var(--text-title)"}}>{children}<span aria-hidden="true" style={{color:"var(--text-accent)"}}>」</span></blockquote>
      {(cite||source)&&<figcaption style={{fontFamily:"var(--font-fangsong)",fontSize:"var(--fs-caption)",color:"var(--text-muted)"}}>
        {"—— "}{cite}{source&&<span style={{color:"var(--text-faint)"}}>{" · "+source}</span>}</figcaption>}
    </div>
  </figure>;
}
