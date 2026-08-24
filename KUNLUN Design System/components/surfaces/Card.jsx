import React from "react";

/**
 * Card — simpler container than Panel: no chrome, optional eyebrow + title.
 */
export function Card({
  eyebrow,
  title,
  interactive = false,
  className = "",
  children,
  ...rest
}) {
  const cls = [
    "kl-card",
    interactive ? "kl-card--interactive" : "",
    className,
  ].filter(Boolean).join(" ");

  return (
    <div className={cls} {...rest}>
      {eyebrow && <div className="kl-card__eyebrow">{eyebrow}</div>}
      {title && <h3 className="kl-card__title">{title}</h3>}
      <div className="kl-card__body">{children}</div>
    </div>
  );
}
