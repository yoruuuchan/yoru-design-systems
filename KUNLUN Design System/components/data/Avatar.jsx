import React from "react";

/**
 * Avatar — square (chamfered) or circle. Initials, image, or icon child.
 */
export function Avatar({
  size = "md",
  shape = "sq",
  src,
  alt,
  initials,
  className = "",
  children,
  ...rest
}) {
  const cls = [
    "kl-avatar",
    `kl-avatar--${shape}`,
    `kl-avatar--${size}`,
    className,
  ].filter(Boolean).join(" ");
  return (
    <span className={cls} {...rest}>
      {src ? (
        <img className="kl-avatar__img" src={src} alt={alt || ""} />
      ) : (
        children || initials
      )}
    </span>
  );
}
