import React from "react";
import { Page } from "../page/Page.jsx";
import { Masthead, cnIssue } from "../page/Masthead.jsx";

/* Cover B — the "套印" cover.

   The title prints twice: a solid ink pass at z-index 2, and a pale accent
   pass 0.08em above and 0.11em to the right (relative to --fs-cover),
   mix-blend-mode:multiply so the two pass through each other rather than
   fighting for the eye. It reads as a riso print that came off the press a
   hair misaligned.

   No more giant corner卷号. Earlier revisions rendered `issueNumber` as a
   4.6× monster汉字 cropped by the page edge — worked for high-stroke digits,
   collapsed to a single-stroke shard for 一 / 二 / 三 / 十, and the reader
   never saw a number. The卷号 still lives — in the masthead and the spine
   (both use cnIssue) — the cover just doesn't try to be its billboard.

   Optional cover image: `image` fills the space that used to be dominated by
   the corner graphic. Frame treatment stays quiet (thin border, --radius-media,
   no shadow) so the套印 title remains the loudest thing on the page. Ratio
   defaults to 16 / 10; pass `imageRatio` to override, `imageCaption` for a
   short line under the frame.

   The masthead is identical to interior pages: 月相 + 汉字页码 + 文武线.
   `column`/`date`/`issueNumber` are still accepted (workbench passes them,
   spine string uses them) but the cover renders none of them itself; the date
   lives in the Page spine, the卷号 in the masthead page-number pair. */
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
  image,
  imageCaption,
  imageRatio = "16 / 10",
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

      {/* the overprint title — data-yoru-plate lets the render check measure how
          much of the cover this stack actually fills (bad-cover.js: title only,
          plate collapses to ~12%, both cover-fields and thin fire) */}
      <div data-yoru-plate="" style={{
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
        {image && (
          <figure style={{margin:0,display:"flex",flexDirection:"column",gap:"var(--sp-3)"}}>
            <div style={{
              width:"100%",aspectRatio:imageRatio,overflow:"hidden",
              borderRadius:"var(--radius-media)",
              border:"var(--hair) solid var(--border-rule)",
              background:"var(--paper-2)",
              display:"flex",alignItems:"center",justifyContent:"center"
            }}>
              <img src={image} alt={typeof imageCaption==="string"?imageCaption:""}
                   style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
            </div>
            {imageCaption && (
              <figcaption style={{
                fontFamily:"var(--font-body)",fontSize:"var(--fs-caption)",
                lineHeight:"var(--lh-tight)",color:"var(--text-muted)"
              }}>{imageCaption}</figcaption>
            )}
          </figure>
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
