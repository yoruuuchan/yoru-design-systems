import React from "react";

/**
 * Panel — terminal-style window with a title bar, optional meta + actions
 * in the head, optional footer. The signature KUNLUN surface for grouping content.
 */
export function Panel({
  title,
  meta,
  actions,
  footer,
  variant = "default",
  flush = false,
  className = "",
  children,
  ...rest
}) {
  const cls = [
    "kl-panel",
    variant !== "default" ? `kl-panel--${variant}` : "",
    className,
  ].filter(Boolean).join(" ");

  return (
    <section className={cls} {...rest}>
      {(title || meta || actions) && (
        <header className="kl-panel__head">
          <div className="kl-panel__title">
            {title}
            {meta && <span className="kl-panel__meta">// {meta}</span>}
          </div>
          {actions && <div className="kl-panel__actions">{actions}</div>}
        </header>
      )}
      <div className={`kl-panel__body ${flush ? "kl-panel__body--flush" : ""}`}>
        {children}
      </div>
      {footer && <footer className="kl-panel__foot">{footer}</footer>}
    </section>
  );
}
