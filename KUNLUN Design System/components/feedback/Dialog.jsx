import React from "react";

/**
 * Dialog — chamfered modal with title bar, scrollable body, footer actions.
 */
export function Dialog({
  open,
  onClose,
  title,
  variant = "default",
  actions,
  closeOnOverlay = true,
  children,
}) {
  if (!open) return null;
  const dlgCls = ["kl-dialog", variant !== "default" ? `kl-dialog--${variant}` : ""]
    .filter(Boolean).join(" ");
  return (
    <div
      className="kl-dialog-overlay"
      onClick={(e) => {
        if (closeOnOverlay && e.target === e.currentTarget) onClose?.();
      }}
    >
      <div className={dlgCls} role="dialog" aria-modal="true">
        {title && (
          <header className="kl-dialog__head">
            <h3 className="kl-dialog__title">{title}</h3>
            <button
              type="button"
              onClick={onClose}
              className="kl-iconbtn kl-iconbtn--ghost kl-iconbtn--sm"
              aria-label="Close"
            >×</button>
          </header>
        )}
        <div className="kl-dialog__body">{children}</div>
        {actions && <footer className="kl-dialog__foot">{actions}</footer>}
      </div>
    </div>
  );
}
