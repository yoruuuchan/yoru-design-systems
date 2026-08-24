import React from "react";

/** Kicker, title, standfirst. The three lines that open every piece. */
export function ArticleHeader({ kicker, title, emphasis, standfirst, size = "lg", align = "left", maxWidth, style, ...rest }) {
  const fs = { sm: "var(--type-h1)", md: "var(--type-display-3)", lg: "var(--type-display-2)", xl: "var(--type-display-1)" }[size];
  return (
    <header style={{ textAlign: align, ...style }} {...rest}>
      {kicker && <div style={{
        fontFamily: "var(--font-mono)", fontSize: "var(--type-micro)",
        letterSpacing: ".14em", textTransform: "uppercase", color: "var(--text-accent)"
      }}>{kicker}</div>}
      {title && <h1 style={{
        fontFamily: "var(--font-display)", fontWeight: "var(--weight-regular)", fontSize: fs,
        lineHeight: "var(--leading-tight)", letterSpacing: "var(--tracking-display)",
        color: "var(--text-display)", marginTop: kicker ? "var(--space-4)" : 0,
        maxWidth: maxWidth || "16ch", marginLeft: align === "center" ? "auto" : 0, marginRight: align === "center" ? "auto" : 0
      }}>
        {title}{emphasis && <React.Fragment>{" "}<em style={{ fontStyle: "italic" }}>{emphasis}</em></React.Fragment>}
      </h1>}
      {standfirst && <p style={{
        fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "var(--type-body-lg)",
        lineHeight: 1.55, color: "var(--text-secondary)", marginTop: "var(--space-5)",
        maxWidth: "48ch", marginLeft: align === "center" ? "auto" : 0, marginRight: align === "center" ? "auto" : 0
      }}>{standfirst}</p>}
    </header>
  );
}
