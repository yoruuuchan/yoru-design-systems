import React from "react";

/** Running body copy. Handles the drop cap, the column count and bilingual leading. */
export function TextBlock({ children, dropCap = false, columns = 1, size = "md", lang, measure = "var(--measure)", style, ...rest }) {
  const fs = { sm: "var(--type-body-sm)", md: "var(--type-body)", lg: "var(--type-body-lg)" }[size];
  const isCJK = lang === "zh";
  return (
    <div
      className={dropCap ? "paper-text paper-text--drop" : "paper-text"}
      lang={lang}
      style={{
        fontFamily: "var(--font-serif)", fontSize: fs,
        lineHeight: isCJK ? "var(--leading-cjk)" : "var(--leading-text)",
        color: "var(--text-body)", maxWidth: columns > 1 ? "none" : measure,
        columnCount: columns > 1 ? columns : undefined,
        columnGap: columns > 1 ? "var(--space-6)" : undefined, ...style
      }} {...rest}
    >
      <style>{".paper-text>p+p{margin-top:0;text-indent:1.5em}.paper-text--drop>p:first-of-type{text-indent:0}.paper-text--drop>p:first-of-type::first-letter{float:left;font-family:var(--font-display);font-size:3.4em;line-height:.84;padding:.06em .1em 0 0;color:var(--text-display)}"}</style>
      {children}
    </div>
  );
}
