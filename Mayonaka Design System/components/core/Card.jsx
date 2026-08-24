import React from "react";

export function Card({
  variant = "default",
  glow = false,
  title,
  meta,
  children,
  style,
  ...rest
}) {
  const variants = {
    default: {
      background: "var(--bg-card)",
      border: "2px solid var(--border-default)",
    },
    raised: {
      background: "var(--bg-raised)",
      border: "2px solid var(--border-default)",
      boxShadow: "var(--shadow-pixel)",
    },
    neon: {
      background: "var(--bg-card)",
      border: "2px solid var(--magenta)",
      boxShadow: glow ? "var(--glow-magenta)" : "var(--shadow-pixel-magenta)",
    },
    cyan: {
      background: "var(--bg-card)",
      border: "2px solid var(--cyan)",
      boxShadow: glow ? "var(--glow-cyan)" : "var(--shadow-pixel-cyan)",
    },
    blue: {
      background: "var(--bg-card)",
      border: "2px solid var(--electric)",
      boxShadow: glow ? "var(--glow-blue)" : "var(--shadow-pixel-blue)",
    },
  };

  return (
    <div
      style={{
        padding: "var(--s-5)",
        fontFamily: "var(--font-body)",
        color: "var(--text-primary)",
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      {(title || meta) && (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "var(--s-3)", borderBottom: "1px solid var(--border-default)", paddingBottom: "var(--s-2)" }}>
          {title && (
            <div style={{ fontFamily: "var(--font-display)", fontSize: "12px", letterSpacing: "0.12em", color: variant === "cyan" ? "var(--cyan)" : variant === "blue" ? "var(--azure)" : "var(--magenta)", textTransform: "uppercase" }}>
              {title}
            </div>
          )}
          {meta && (
            <div style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--text-muted)" }}>
              {meta}
            </div>
          )}
        </div>
      )}
      {children}
    </div>
  );
}
