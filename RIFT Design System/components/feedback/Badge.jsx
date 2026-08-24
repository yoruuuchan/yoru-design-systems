import React from "react";

/**
 * RIFT — status badge with built-in dot. Variants: ok / warn / bad
 * (any other value renders the neutral ice-cyan default).
 */
export function Badge({ variant, className = "", children, ...rest }) {
  const classes = [
    "rift-badge",
    variant === "ok"   && "rift-badge--ok",
    variant === "warn" && "rift-badge--warn",
    variant === "bad"  && "rift-badge--bad",
    className,
  ].filter(Boolean).join(" ");
  return (
    <span className={classes} {...rest}>
      {children}
    </span>
  );
}
