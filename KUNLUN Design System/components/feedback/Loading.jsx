import React from "react";

/**
 * Loading — terminal-style block-character marquee + optional label.
 * Use the `spinner` variant for a compact inline indicator.
 */
export function Loading({
  variant = "blocks",
  label = "LOADING...",
  className = "",
}) {
  if (variant === "spinner") {
    return (
      <span className={`kl-loading ${className}`}>
        <span className="kl-spinner" />
        {label && <span>{label}</span>}
      </span>
    );
  }
  return (
    <span className={`kl-loading ${className}`}>
      <span className="kl-loading__blocks">
        <span>▮</span><span>▮</span><span>▮</span><span>▮</span><span>▮</span>
      </span>
      {label && <span>{label}</span>}
    </span>
  );
}
