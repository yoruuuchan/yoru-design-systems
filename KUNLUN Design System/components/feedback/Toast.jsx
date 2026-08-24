import React from "react";

const ICONS = { info: "i", success: "✓", warn: "!", error: "⨯" };

/**
 * Toast — transient notification. Render inside a <ToastStack>.
 */
export function Toast({
  variant = "info",
  title,
  onClose,
  children,
}) {
  return (
    <div className={`kl-toast kl-toast--${variant}`} role="status">
      <span className="kl-toast__icon">{ICONS[variant]}</span>
      <div style={{ flex: 1 }}>
        {title && <div className="kl-toast__title">{title}</div>}
        <div>{children}</div>
      </div>
      {onClose && (
        <button className="kl-toast__close" onClick={onClose} aria-label="Dismiss">×</button>
      )}
    </div>
  );
}

/** Fixed stack in the bottom-right corner. */
export function ToastStack({ children }) {
  return <div className="kl-toast-stack">{children}</div>;
}
