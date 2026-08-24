import React from "react";

export function Badge({ variant = "magenta", children, style, ...rest }) {
  const palette = {
    magenta: { bg: "var(--magenta)", fg: "var(--void)" },
    cyan:    { bg: "var(--cyan)",    fg: "var(--void)" },
    blue:    { bg: "var(--electric)", fg: "#fff" },
    success: { bg: "var(--success)", fg: "var(--void)" },
    warning: { bg: "var(--warning)", fg: "var(--void)" },
    danger:  { bg: "var(--danger)",  fg: "var(--void)" },
    muted:   { bg: "transparent",    fg: "var(--silver)", border: "1px solid var(--border-default)" },
  }[variant];

  return (
    <span
      style={{
        display: "inline-block",
        background: palette.bg,
        color: palette.fg,
        border: palette.border || "none",
        padding: "3px 8px",
        fontFamily: "var(--font-display)",
        fontSize: "9px",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        lineHeight: 1,
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
