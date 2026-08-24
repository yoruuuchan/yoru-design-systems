import React from "react";

/** Wraps anything in the soft dark lip a print picks up on a scanner bed. */
export function ScanEdge({ children, sides = "x", intensity = 1, style, ...rest }) {
  const g = sides === "y"
    ? "linear-gradient(180deg,rgba(30,28,22,.16),rgba(30,28,22,0) 5%,rgba(30,28,22,0) 95%,rgba(30,28,22,.13))"
    : sides === "all"
      ? "radial-gradient(120% 120% at 50% 50%, rgba(30,28,22,0) 58%, rgba(30,28,22,.18) 100%)"
      : "var(--scan-edge)";
  return (
    <div style={{ position: "relative", ...style }} {...rest}>
      {children}
      <span aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", background: g, opacity: intensity }} />
    </div>
  );
}
