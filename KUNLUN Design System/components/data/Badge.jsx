import React from "react";

/**
 * Badge — small, dense label. Uppercase mono.
 */
export function Badge({
  variant = "neutral",
  solid = false,
  className = "",
  children,
  ...rest
}) {
  const cls = [
    "kl-badge",
    `kl-badge--${variant}`,
    solid ? "kl-badge--solid" : "",
    className,
  ].filter(Boolean).join(" ");
  return <span className={cls} {...rest}>{children}</span>;
}
