import React from "react";

/** Square, quiet, letterpress-ish. PAPER has one button and three weights of it. */
export function Button({ children, variant = "solid", size = "md", href, disabled, onClick, style, ...rest }) {
  const pad = { sm: "7px 14px", md: "10px 20px", lg: "13px 28px" }[size] || "10px 20px";
  const fs = { sm: "var(--type-micro)", md: "var(--type-caption)", lg: "var(--type-body-sm)" }[size] || "var(--type-caption)";
  const skin = {
    solid: { background: "var(--ink-800)", color: "var(--paper-100)", border: "1px solid var(--ink-800)" },
    outline: { background: "transparent", color: "var(--text-body)", border: "1px solid var(--rule-strong)" },
    quiet: { background: "transparent", color: "var(--text-secondary)", border: "1px solid var(--rule-hair)" },
    accent: { background: "var(--rust-500)", color: "var(--paper-100)", border: "1px solid var(--rust-500)" }
  }[variant];
  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href} onClick={onClick} disabled={disabled}
      style={{
        display: "inline-flex", alignItems: "center", gap: "var(--space-2)", padding: pad,
        fontFamily: "var(--font-sans)", fontSize: fs, fontWeight: "var(--weight-medium)",
        letterSpacing: ".04em", borderRadius: "var(--radius-0)", cursor: disabled ? "default" : "pointer",
        textDecoration: "none", opacity: disabled ? 0.4 : 1, whiteSpace: "nowrap",
        transition: "background var(--dur-1) var(--ease-paper), color var(--dur-1) var(--ease-paper), border-color var(--dur-1) var(--ease-paper)",
        ...skin, ...style
      }}
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.background = variant === "solid" ? "var(--ink-900)" : variant === "accent" ? "var(--rust-700)" : "var(--paper-400)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = skin.background; }}
      {...rest}
    >{children}</Tag>
  );
}
