import React from "react";

/**
 * StatusPill — dot + label. The dot animates per status. Use for system state.
 */
export function StatusPill({
  status = "online",
  className = "",
  children,
  ...rest
}) {
  const cls = ["kl-pill", `kl-pill--${status}`, className]
    .filter(Boolean).join(" ");
  return (
    <span className={cls} {...rest}>
      <span className="kl-pill__dot" aria-hidden />
      <span>{children}</span>
    </span>
  );
}
