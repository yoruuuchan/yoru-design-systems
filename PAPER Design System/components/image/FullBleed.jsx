import React from "react";

/** A section that breaks the page margins — the full-width spread. */
export function FullBleed({ children, background, dark = false, padded = true, minHeight, style, ...rest }) {
  return (
    <section
      data-mode={dark ? "dark" : undefined}
      style={{
        width: "100vw", marginLeft: "50%", transform: "translateX(-50vw)",
        background: background || (dark ? "var(--surface-dark)" : "var(--surface-sunken)"),
        color: dark ? "var(--text-on-dark)" : "inherit",
        minHeight,
        padding: padded ? "var(--space-9) var(--page-margin)" : 0, ...style
      }} {...rest}
    >
      <div style={{ maxWidth: "var(--page-max)", margin: "0 auto" }}>{children}</div>
    </section>
  );
}
