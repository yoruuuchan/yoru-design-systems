import React from "react";

/**
 * RIFT — primary action button.
 * Glass-backed pill with optional gradient (primary), ghost or danger.
 */
export function Button({
  variant = "default",
  size = "md",
  block = false,
  glow = false,
  className = "",
  children,
  ...rest
}) {
  const classes = [
    "rift-btn",
    variant === "primary" && "rift-btn--primary",
    variant === "ghost"   && "rift-btn--ghost",
    variant === "danger"  && "rift-btn--danger",
    size === "sm" && "rift-btn--sm",
    size === "lg" && "rift-btn--lg",
    block && "rift-btn--block",
    glow && "rift-glow",
    className,
  ].filter(Boolean).join(" ");

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
