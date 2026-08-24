import React from "react";

/* The masthead — YORU's fixed page furniture, 铅字房版。

   左：一行月相（新月→上弦→满月→残月），满月吃 var(--accent)，所以每个变体的
   报头月色不同，其余月相永远是墨色。右：汉字页码（〇二 / 〇七）。下：文武线
   （粗 --wu + 细 --hair，隔 4px）。没有刊名、没有栏目名、没有日期——日期住在
   书脊栏（Page 的 spine），身份认同就是这行月相和这对线。

   MoonPhases 单独导出，封面和 EndCard 复用（竖排版转 90° 用 vertical 属性）。 */

const CN_DIGIT = "〇一二三四五六七八九";
export const cnPage = (n) => String(n).padStart(2, "0").split("").map(d => CN_DIGIT[+d] ?? d).join("");
export const cnIssue = (n) => { n = parseInt(n, 10); const t = "零一二三四五六七八九十"; return n <= 10 ? t[n] : cnPage(n); };
export const cnDate = (s) => { const m = String(s).match(/(\d{4})\D?(\d{1,2})/); if (!m) return s; return m[1].split("").map(d => CN_DIGIT[+d]).join("") + "年" + cnIssue(m[2]) + "月"; };

export function MoonPhases({ size = "1em", vertical = false, ink = "currentColor", style, ...rest }) {
  const uid = React.useId().replace(/[:]/g, "");
  const r = 10, cy = 13, xs = [12, 36, 60, 84], sw = 2.4;
  return (
    <svg viewBox="0 0 96 26" style={{ height: vertical ? "auto" : size, width: vertical ? size : "auto", display: "block",
      transform: vertical ? "rotate(90deg)" : "none", ...style }} {...rest}>
      <circle cx={xs[0]} cy={cy} r={r} fill="none" stroke={ink} strokeWidth={sw} />
      <path d={`M${xs[1]} ${cy - r} A${r} ${r} 0 0 1 ${xs[1]} ${cy + r} Z`} fill={ink} />
      <circle cx={xs[1]} cy={cy} r={r} fill="none" stroke={ink} strokeWidth={sw} />
      <circle cx={xs[2]} cy={cy} r={r} fill="var(--accent)" data-uid={uid} />
      <path d={`M${xs[3]} ${cy - r} a${r} ${r} 0 0 1 0 ${2 * r} a${r * 0.55} ${r} 0 0 0 0 ${-2 * r}`} fill={ink} />
    </svg>
  );
}

export function Masthead({ index, total, tone = "paper", column, date, rule, style, ...rest }) {
  const ink = tone === "ink";
  const mk = ink ? "rgba(255,255,255,.88)" : "var(--ink-1)";
  const dim = ink ? "rgba(255,255,255,.55)" : "var(--text-muted)";
  const line = ink ? "rgba(255,255,255,.8)" : "var(--ink-1)";
  return (
    <div style={{ ...style }} {...rest}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", paddingBottom: "var(--sp-3)" }}>
        <MoonPhases size="0.95em" ink={mk} style={{ fontSize: "var(--fs-h3)" }} />
        {index && <span style={{ fontFamily: "var(--font-fangsong)", fontSize: "var(--fs-label)",
          letterSpacing: ".14em", color: dim, lineHeight: 1 }}>{cnPage(index)}{total ? " / " + cnPage(total) : ""}</span>}
      </div>
      <div style={{ height: "var(--wu)", background: line }} />
      <div style={{ height: "var(--hair)", background: line, marginTop: "4px" }} />
    </div>
  );
}
