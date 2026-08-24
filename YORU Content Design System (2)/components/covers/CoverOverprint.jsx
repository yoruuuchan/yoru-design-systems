import React from "react";
import { Page } from "../page/Page.jsx";
import { Masthead, cnIssue } from "../page/Masthead.jsx";

/* Cover B — the "套印" cover.

   The title prints twice: a solid ink pass at z-index 2, and a pale accent
   pass 8px above and 14px to the left, mix-blend-mode:multiply so the two
   pass through each other rather than fighting for the eye. It reads as a
   riso print that came off the press a hair misaligned. A very large mono
   issue number sits behind everything, cropped by the page edge, so the
   card carries the current number as a graphic instead of a caption.

   The masthead is identical to interior pages: 月相 + 汉字页码 + 文武线.
   No wordmark, no column, no date — `column`/`date` are still accepted
   from old callers but render nothing; the date lives in the Page spine. */
export function CoverOverprint({
  variant = "signal",
  size = "1242x1656",
  column,
  date,
  index = 1,
  total,
  title,
  subtitle,
  tags = [],
  aside,
  issueNumber,
  style,
  ...rest
}) {
  const ghost = "color-mix(in oklch, var(--accent) 55%, #fff)";
  return (
    <Page variant={variant} size={size} style={style} {...rest}>
      {/* 报头与内页完全一致：月相 + 汉字页码 + 文武线 */}
      <div style={{position:"absolute",top:"calc(var(--page-pad-y) - var(--sp-6))",left:"var(--page-pad-x)",right:"var(--page-pad-x)",zIndex:3}}>
        <Masthead index={index} total={total}/>
      </div>

      {/* 卷号，巨字号单字，被页缘裁切 */}
      {issueNumber && (
        <span aria-hidden="true" style={{
          position:"absolute",right:"calc(var(--page-pad-x) * -.45)",bottom:"calc(var(--page-pad-y) * -1.1)",
          fontFamily:"var(--font-title)",fontWeight:900,fontSize:"calc(var(--fs-cover) * 4.6)",
          lineHeight:.9,color:"var(--accent-soft)",zIndex:0,userSelect:"none"
        }}>{cnIssue(issueNumber)}</span>
      )}

      {/* the overprint title */}
      <div style={{
        position:"absolute",inset:"calc(var(--page-pad-y) + var(--sp-8)) var(--page-pad-x) calc(var(--page-pad-y) + var(--sp-8))",
        display:"flex",flexDirection:"column",justifyContent:"center",gap:"var(--sp-5)",zIndex:2
      }}>
        <h1 style={{margin:0,position:"relative",display:"block"}}>
          <span aria-hidden="true" style={{
            position:"absolute",top:"-.08em",left:".11em",display:"block",
            fontFamily:"var(--font-title)",fontWeight:900,fontSize:"var(--fs-cover)",
            lineHeight:"var(--lh-cover)",letterSpacing:"var(--ls-cover)",
            color:ghost,mixBlendMode:"multiply",pointerEvents:"none"
          }}>{title}</span>
          <span style={{
            position:"relative",display:"block",
            fontFamily:"var(--font-title)",fontWeight:900,fontSize:"var(--fs-cover)",
            lineHeight:"var(--lh-cover)",letterSpacing:"var(--ls-cover)",color:"var(--text-title)"
          }}>{title}</span>
        </h1>
        {subtitle && (
          <p style={{
            margin:0,maxWidth:"84%",fontFamily:"var(--font-fangsong)",fontWeight:400,
            fontSize:"var(--fs-lede)",lineHeight:"var(--lh-body)",color:"var(--ink-3)"
          }}>{subtitle}</p>
        )}
        {(tags.length>0||aside)&&(
          <div style={{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"var(--sp-3)",marginTop:"var(--sp-2)"}}>
            {tags.map((t,i)=><span key={i} style={{
              fontFamily:"var(--font-ui)",fontWeight:500,fontSize:"var(--fs-label)",
              letterSpacing:".06em",padding:"var(--sp-1) var(--sp-3)",
              color:"var(--accent-ink)",border:"var(--hair) solid var(--accent-hair)",borderRadius:"var(--radius-tag)"
            }}>{t}</span>)}
            {aside && (
              <span style={{
                fontFamily:"var(--font-body)",fontSize:"var(--fs-small)",lineHeight:1.5,
                transform:"rotate(-1.2deg)",borderBottom:"var(--hair) solid var(--border-rule)",
                paddingBottom:"var(--sp-1)",color:"var(--text-muted)"
              }}>{aside}</span>
            )}
          </div>
        )}
      </div>
    </Page>
  );
}
