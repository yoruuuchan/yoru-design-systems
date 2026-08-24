import React from "react";

/**
 * Textarea — multi-line text input. Same chamfered well as Input.
 */
export function Textarea({
  label,
  hint,
  error,
  id,
  className = "",
  ...rest
}) {
  const autoId = React.useId();
  const inputId = id || autoId;
  const cls = ["kl-textarea", error ? "kl-textarea--error" : "", className]
    .filter(Boolean).join(" ");
  return (
    <div className="kl-field">
      {label && <label className="kl-field__label" htmlFor={inputId}>{label}</label>}
      <textarea id={inputId} className={cls} {...rest} />
      {(error || hint) && (
        <span className={`kl-field__hint ${error ? "kl-field__hint--error" : ""}`}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
