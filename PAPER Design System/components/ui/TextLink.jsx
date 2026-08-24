import React from "react";

/** An inline link that behaves like a printed cross-reference: rule under, arrow after. */
export function TextLink({ children, href = "#", arrow = false, tone = "body", size, style, ...rest }) {
  const color = tone === "accent" ? "var(--text-accent)" : tone === "muted" ? "var(--text-muted)" : "var(--link)";
  return (
    <a href={href} style={{
      color, fontFamily: "inherit", fontSize: size, textDecoration: "none",
      borderBottom: "1px solid var(--link-underline)", display: "inline-flex",
      alignItems: "baseline", gap: "var(--space-2)",
      transition: "color var(--dur-1) var(--ease-paper), border-color var(--dur-1) var(--ease-paper)", ...style
    }} {...rest}>
      <span>{children}</span>
      {arrow && <span style={{ fontFamily: "var(--font-sans)", fontSize: ".9em" }}>&#8594;</span>}
    </a>
  );
}
