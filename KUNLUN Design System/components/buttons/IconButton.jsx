import React from "react";

/**
 * IconButton — icon-only square button. Same chamfered silhouette as Button.
 */
export function IconButton({
  variant = "default",
  size = "md",
  label,
  className = "",
  children,
  ...rest
}) {
  const cls = [
    "kl-iconbtn",
    variant !== "default" ? `kl-iconbtn--${variant}` : "",
    `kl-iconbtn--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={cls} aria-label={label} title={label} {...rest}>
      {children}
    </button>
  );
}
