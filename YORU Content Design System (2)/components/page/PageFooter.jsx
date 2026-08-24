import React from "react";

/* Authorship strip pinned to the bottom of a Page. */
export function PageFooter({handle,note,mark=true,align="between"}){
  return (
    <div style={{position:"absolute",left:"var(--page-pad-x)",right:"var(--page-pad-x)",bottom:"calc(var(--page-pad-y) - var(--sp-5))",
      display:"flex",justifyContent:align==="between"?"space-between":"flex-start",gap:"var(--sp-4)",alignItems:"center",
      borderTop:"var(--hair) solid var(--border-hair)",paddingTop:"var(--sp-3)",
      fontFamily:"var(--font-label)",fontSize:"var(--fs-label)",letterSpacing:"var(--ls-label)",color:"var(--text-faint)",textTransform:"uppercase"}}>
      <span style={{display:"flex",alignItems:"center",gap:"var(--sp-2)"}}>
        {handle&&<span>{handle}</span>}
      </span>
      {note&&<span>{note}</span>}
    </div>
  );
}
