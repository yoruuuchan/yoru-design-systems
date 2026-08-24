import React from "react";

/** A sentence lifted out of the text and set large. */
export function PullQuote({ children, attribution, size = "md", variant = "rules", italic = true, align = "left", style, ...rest }) {
  const fs = { sm: "var(--type-h2)", md: "var(--type-h1)", lg: "var(--type-display-3)" }[size];
  const box = {
    rules: { borderTop: "1px solid var(--rule-strong)", borderBottom: "1px solid var(--rule-strong)", padding: "var(--space-5) 0" },
    hang: { borderLeft: "1px solid var(--rust-500)", paddingLeft: "var(--space-5)" },
    plain: {},
    mark: { paddingTop: "var(--space-5)" }
  }[variant];
  return (
    <blockquote style={{ textAlign: align, ...box, ...style }} {...rest}>
      {variant === "mark" && <span aria-hidden="true" style={{ display: "block", fontFamily: "var(--font-display)", fontSize: "3em", lineHeight: .3, color: "var(--rust-300)" }}>&#8220;</span>}
      <p style={{
        fontFamily: "var(--font-display)", fontSize: fs, lineHeight: "var(--leading-snug)",
        fontStyle: italic ? "italic" : "normal", color: "var(--text-display)",
        letterSpacing: "-.005em", textIndent: 0, marginTop: variant === "mark" ? "var(--space-4)" : 0
      }}>{children}</p>
      {attribution && <cite style={{
        display: "block", fontStyle: "normal", fontFamily: "var(--font-sans)",
        fontSize: "var(--type-micro)", letterSpacing: "var(--tracking-label)",
        textTransform: "uppercase", color: "var(--text-muted)", marginTop: "var(--space-4)"
      }}>{attribution}</cite>}
    </blockquote>
  );
}
