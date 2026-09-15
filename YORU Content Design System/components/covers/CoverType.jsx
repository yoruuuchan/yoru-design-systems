import React from "react";
import { Page } from "../page/Page.jsx";

/* Cover A — type only. The title is the image. No screenshot, no illustration.

   Layout: title + subtitle + tag row all live in one block, vertically centred
   between masthead and the bottom signature line. Tags sit inline right under
   the subtitle so the composition doesn't split into "big top / tiny bottom" —
   the whole meta cluster stays with the title. The bottom-right carries only
   the small issue line; readers already know this is a cover, so it doesn't
   need to shout. */
export function CoverType({variant="signal",size="1242x1656",column,date,kicker,title,subtitle,tags=[],issue,aside,total,tone="paper",style,...rest}){
  const ink=tone==="ink";
  return (
    <Page variant={variant} size={size} tone={tone} align="center" column={column||kicker} date={date} index={column||kicker?1:undefined} total={total} style={style} {...rest}>
      <div style={{display:"flex",flexDirection:"column",gap:"var(--sp-4)"}}>
        <h1 style={{margin:0,fontFamily:"var(--font-title)",fontWeight:900,fontSize:"var(--fs-cover)",
          lineHeight:"var(--lh-cover)",letterSpacing:"var(--ls-cover)",color:ink?"#fff":"var(--text-title)"}}>{title}</h1>
        {subtitle&&<p style={{margin:0,maxWidth:"88%",fontFamily:"var(--font-body)",fontWeight:300,fontSize:"var(--fs-lede)",
          lineHeight:"var(--lh-body)",color:ink?"rgba(255,255,255,.72)":"var(--ink-3)"}}>{subtitle}</p>}
        {(tags.length>0||aside)&&<div style={{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"var(--sp-3)",marginTop:"var(--sp-3)"}}>
          {tags.map((t,i)=><span key={i} style={{fontFamily:"var(--font-ui)",fontWeight:500,fontSize:"var(--fs-label)",
            letterSpacing:".06em",padding:"var(--sp-1) var(--sp-3)",borderRadius:"var(--radius-tag)",
            color:ink?"#fff":"var(--accent-ink)",border:"var(--hair) solid "+(ink?"rgba(255,255,255,.3)":"var(--accent-hair)")}}>{t}</span>)}
          {aside&&<span style={{fontFamily:"var(--font-body)",fontSize:"var(--fs-small)",lineHeight:1.5,
            transform:"rotate(-1.2deg)",borderBottom:"var(--hair) solid var(--border-rule)",paddingBottom:"var(--sp-1)",
            color:ink?"rgba(255,255,255,.72)":"var(--text-muted)"}}>{aside}</span>}
        </div>}
      </div>
      {issue&&<span className="yoru-num" style={{position:"absolute",right:"var(--page-pad-x)",bottom:"var(--page-pad-y)",
        fontSize:"var(--fs-label)",letterSpacing:"var(--ls-label)",
        color:ink?"rgba(255,255,255,.45)":"var(--text-faint)"}}>{issue}</span>}
    </Page>
  );
}
