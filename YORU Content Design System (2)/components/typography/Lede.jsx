import React from "react";

/* Opening paragraph of a page or article — one step up, slightly looser. */
export function Lede({children,style,...rest}){
  return <p style={{margin:0,fontFamily:"var(--font-fangsong)",fontWeight:400,fontSize:"var(--fs-lede)",
    lineHeight:"var(--lh-body)",color:"var(--ink-3)",...style}} {...rest}>{children}</p>;
}
