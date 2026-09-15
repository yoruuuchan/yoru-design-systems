import React from "react";

export function Body({children,size="base",muted=false,style,...rest}){
  return <p style={{margin:0,fontFamily:"var(--font-body)",fontWeight:400,
    fontSize:size==="small"?"var(--fs-small)":"var(--fs-body)",lineHeight:"var(--lh-body)",letterSpacing:"var(--ls-body)",
    color:muted?"var(--text-muted)":"var(--text-body)",...style}} {...rest}>{children}</p>;
}
