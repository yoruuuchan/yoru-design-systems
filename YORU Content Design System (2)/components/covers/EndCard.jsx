import React from "react";
import { Page } from "../page/Page.jsx";
import { MoonPhases } from "../page/Masthead.jsx";

/* The end card — the last page of a Xiaohongshu set.

   The whole set signs itself HERE, once. A large 完 mark sits in the bottom
   right corner in the same overprint style as the paired <CoverOverprint>: a
   solid ink pass and a pale accent pass 22px above and 30px to the left,
   multiply-blended so the two passes read as one riso print off-register.
   There is no text wordmark anywhere in the system: the sign-off is the
   vertical moon-phase strip (spine position, top-right) plus a fangsong
   note in the bottom-left plate margin. No @handle line. */
export function EndCard({
  variant = "signal",
  size = "1242x1656",
  headline = "看完顺手点个收藏",
  lines = [],
  note,
  mark = "完",
  tone = "paper",
  style,
  ...rest
}) {
  const ink = tone === "ink";
  const ghost = ink
    ? "color-mix(in oklch, var(--accent) 55%, var(--ink-1))"
    : "color-mix(in oklch, var(--accent) 55%, #fff)";
  const bodyColor = ink ? "rgba(255,255,255,.78)" : "var(--ink-3)";
  const dimColor  = ink ? "rgba(255,255,255,.55)" : "var(--text-faint)";
  const markColor = ink ? "#fff" : "var(--text-title)";

  return (
    <Page variant={variant} size={size} tone={tone} style={style} {...rest}>
      {/* the 完 overprint mark, cropped by the bottom-right corner */}
      <div aria-hidden="true" style={{
        position:"absolute",right:"calc(var(--page-pad-x) * -.35)",bottom:"calc(var(--page-pad-y) * -.6)",
        zIndex:1,pointerEvents:"none"
      }}>
        <span style={{
          position:"absolute",top:"-22px",left:"-30px",display:"block",
          fontFamily:"var(--font-title)",fontWeight:900,fontSize:"calc(var(--fs-cover) * 4.4)",
          lineHeight:.82,color:ghost,mixBlendMode:"multiply"
        }}>{mark}</span>
        <span style={{
          position:"relative",display:"block",
          fontFamily:"var(--font-title)",fontWeight:900,fontSize:"calc(var(--fs-cover) * 4.4)",
          lineHeight:.82,color:markColor
        }}>{mark}</span>
      </div>

      {/* the content block sits in the upper-left, out of the mark's way */}
      <div style={{
        position:"absolute",top:"calc(var(--page-pad-y) + var(--sp-8))",left:"var(--page-pad-x)",
        right:"calc(var(--page-pad-x) + var(--sp-9))",zIndex:2,
        display:"flex",flexDirection:"column",gap:"var(--sp-6)"
      }}>
        <div style={{width:"var(--sp-8)",height:"var(--rule)",background:"var(--accent)"}}/>
        <h2 style={{margin:0,fontFamily:"var(--font-title)",fontWeight:900,fontSize:"var(--fs-h1)",
          lineHeight:"var(--lh-h1)",color:ink?"#fff":"var(--text-title)"}}>{headline}</h2>
        {lines.length>0 && (
          <ul style={{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:"var(--sp-3)"}}>
            {lines.map((l,i)=>(
              <li key={i} style={{display:"flex",gap:"var(--sp-3)",fontSize:"var(--fs-body)",
                lineHeight:"var(--lh-body)",color:bodyColor}}>
                <span style={{color:"var(--accent)"}}>—</span><span>{l}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* 竖排月相 — 右上边还，书脊位的家具 */}
      <div aria-hidden="true" style={{position:"absolute",top:"var(--page-pad-y)",right:"calc(var(--page-pad-x)*0.3)",zIndex:2}}>
        <MoonPhases vertical size="var(--fs-label)" ink={ink?"rgba(255,255,255,.7)":"var(--ink-1)"} style={{width:"var(--fs-h3)"}}/>
      </div>
      {/* sign-off — fangsong note, plate-margin corner */}
      <div style={{
        position:"absolute",left:"var(--page-pad-x)",bottom:"var(--page-pad-y)",zIndex:3,
        display:"flex",flexDirection:"column",gap:"var(--sp-2)"
      }}>
        {note && (
          <span style={{
            fontFamily:"var(--font-fangsong)",fontSize:"var(--fs-label)",letterSpacing:".14em",color:dimColor
          }}>{note}</span>
        )}
      </div>
    </Page>
  );
}
