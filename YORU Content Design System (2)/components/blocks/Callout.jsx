import React from "react";

/* Boxed aside, 铅字房版：文武线框（细边 + 外圈粗线）代替色底。
   语义靠一枚黄历式的单字标记：注 / 慎 / 忌 / 宜 / 按，用语义色；框永远是墨色。
   No fill, no left edge, no shadow. */
export function Callout({title,kind="note",children,style,...rest}){
  const map={note:["var(--note)","注"],warn:["var(--warn)","慎"],
    stop:["var(--stop)","忌"],ok:["var(--ok)","宜"],plain:["var(--ink-3)","按"]};
  const [c,mark]=map[kind]||map.note;
  return <aside style={{border:"var(--hair) solid var(--ink-1)",outline:"var(--wu) solid var(--ink-1)",outlineOffset:"5px",
    margin:"6px",padding:"var(--sp-4) var(--sp-5)",display:"flex",flexDirection:"column",gap:"var(--sp-2)",...style}} {...rest}>
    <div style={{display:"flex",alignItems:"baseline",gap:"var(--sp-3)"}}>
      <span style={{fontFamily:"var(--font-title)",fontWeight:700,fontSize:"var(--fs-small)",color:c}}>{mark}</span>
      {title&&<span style={{fontFamily:"var(--font-title)",fontWeight:700,fontSize:"var(--fs-small)",letterSpacing:".1em",color:"var(--text-title)"}}>{title}</span>}
    </div>
    <div style={{fontSize:"var(--fs-body)",lineHeight:"var(--lh-body)",color:"var(--ink-2)"}}>{children}</div>
  </aside>;
}
