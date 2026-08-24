import React from "react";

/**
 * Button — primary call-to-action surface in KUNLUN.
 * Chamfered, mono-uppercase. Five variants, three sizes.
 */
export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  disabled = false,
  icon = null,
  iconRight = null,
  className = "",
  children,
  ...rest
}) {
  const cls = [
    "kl-btn",
    `kl-btn--${variant}`,
    `kl-btn--${size}`,
    fullWidth ? "kl-btn--full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={cls}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...rest}
    >
      {loading ? (
        <span className="kl-btn__spinner" aria-hidden />
      ) : icon ? (
        <span className="kl-btn__icon">{icon}</span>
      ) : null}
      <span>{children}</span>
      {iconRight && !loading ? (
        <span className="kl-btn__icon">{iconRight}</span>
      ) : null}
    </button>
  );
}
