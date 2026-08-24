import React from "react";

/**
 * Tag — small chip with optional close button.
 */
export function Tag({
  variant = "default",
  onRemove,
  className = "",
  children,
  ...rest
}) {
  const cls = [
    "kl-tag",
    variant !== "default" ? `kl-tag--${variant}` : "",
    className,
  ].filter(Boolean).join(" ");
  return (
    <span className={cls} {...rest}>
      <span>{children}</span>
      {onRemove && (
        <button
          type="button"
          className="kl-tag__close"
          aria-label="Remove"
          onClick={onRemove}
        >
          ×
        </button>
      )}
    </span>
  );
}
