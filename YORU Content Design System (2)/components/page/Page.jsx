import React from "react";
import { Masthead } from "./Masthead.jsx";

/* The XHS export canvas. Everything on a card page lives inside one <Page>.

   页面家具（铅字房版）：
   - 报头：月相 + 汉字页码 + 文武线（有 index/column/kicker 任一即显示；刊名不再渲染）。
   - spine：直排书脊栏，走右边距（仿宋、.42em 字距），装日期 · 卷号 · 标题。
   kicker 属性仍被接受（旧调用方），但只当作「要报头」的开关，不再显示文字；
   watermark 同理——水印已取消，属性保留为空操作。 */
export function Page({variant="signal",size="1242x1656",column,date,kicker,index,total,spine,watermark,tone="paper",align="start",bleed=false,footer,children,style,className="",...rest}){
  const bg = tone==="ink" ? "var(--ink-1)" : tone==="tint" ? "var(--accent-soft)" : "var(--surface-page)";
  const fg = tone==="ink" ? "#fff" : "var(--text-body)";
  const mast = !!(column||kicker||index);
  return (
    <div className={"yoru-card "+className} data-yoru={variant} data-size={size} data-tone={tone}
      style={{background:bg,color:fg,display:"flex",flexDirection:"column",...style}} {...rest}>
      {mast&&(
        <div style={{position:"absolute",top:"calc(var(--page-pad-y) - var(--sp-6))",left:"var(--page-pad-x)",right:"var(--page-pad-x)"}}>
          <Masthead index={index} total={total} tone={tone}/>
        </div>
      )}
      {spine&&!bleed&&(
        <div style={{position:"absolute",top:"var(--page-pad-y)",bottom:"calc(var(--page-pad-y) + var(--sp-8))",right:"calc(var(--page-pad-x)*0.3)",display:"flex",alignItems:"center",justifyContent:"center"}}>
          <span style={{writingMode:"vertical-rl",textOrientation:"mixed",fontFamily:"var(--font-fangsong)",
            fontSize:"var(--fs-caption)",letterSpacing:".4em",color:tone==="ink"?"rgba(255,255,255,.5)":"var(--text-muted)"}}>{spine}</span>
        </div>
      )}
      <div style={{flex:1,minHeight:0,position:"relative",display:"flex",flexDirection:"column",justifyContent:align==="center"?"center":"flex-start",
        padding:bleed?0:"var(--page-pad-y) var(--page-pad-x)",
        paddingRight:bleed?0:(spine?"calc(var(--page-pad-x) + var(--sp-6))":"var(--page-pad-x)"),
        paddingTop:bleed?0:(mast?"calc(var(--page-pad-y) + var(--sp-7))":"var(--page-pad-y)"),
        gap:"var(--flow-block)"}}>
        {children}
      </div>
      {footer}
    </div>
  );
}
