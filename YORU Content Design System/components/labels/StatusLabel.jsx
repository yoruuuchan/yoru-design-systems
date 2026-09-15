import React from "react";

const MAP = {
  new:{c:"var(--accent-ink)",bg:"var(--accent-soft)",t:"NEW"},
  ok:{c:"var(--ok)",bg:"var(--ok-soft)",t:"推荐"},
  warn:{c:"var(--warn)",bg:"var(--warn-soft)",t:"注意"},
  stop:{c:"var(--stop)",bg:"var(--stop-soft)",t:"避坑"},
  note:{c:"var(--note)",bg:"var(--note-soft)",t:"备注"},
  beta:{c:"var(--note)",bg:"var(--note-soft)",t:"BETA"}
};
/* Verdict / state chip. Carries semantic colour — the only place non-accent colour is allowed. */
export function StatusLabel({status="new",children,style,...rest}){
  const s = MAP[status]||MAP.new;
  return <span style={{display:"inline-flex",alignItems:"center",gap:"var(--sp-1)",
    fontFamily:"var(--font-label)",fontWeight:500,fontSize:"var(--fs-label)",letterSpacing:".1em",textTransform:"uppercase",
    padding:"2px var(--sp-2)",borderRadius:"var(--radius-tag)",color:s.c,background:s.bg,...style}} {...rest}>
    <i style={{width:"6px",height:"6px",borderRadius:"999px",background:s.c,display:"inline-block"}}/>
    {children||s.t}
  </span>;
}
