import React from "react";

/**
 * Input — single-line text input with optional label/hint/error and adornments.
 */
export function Input({
  label,
  hint,
  error,
  size = "md",
  prefix,
  suffix,
  id,
  className = "",
  ...rest
}) {
  const autoId = React.useId();
  const inputId = id || autoId;
  const inputClass = [
    "kl-input",
    size === "sm" ? "kl-input--sm" : "",
    size === "lg" ? "kl-input--lg" : "",
    error ? "kl-input--error" : "",
    className,
  ].filter(Boolean).join(" ");

  const inputEl = <input id={inputId} className={inputClass} {...rest} />;
  const body = prefix || suffix ? (
    <div className="kl-input-wrap">
      {prefix && <span className="kl-input-wrap__adornment">{prefix}</span>}
      {inputEl}
      {suffix && (
        <span className="kl-input-wrap__adornment kl-input-wrap__adornment--right">
          {suffix}
        </span>
      )}
    </div>
  ) : inputEl;

  return (
    <div className="kl-field">
      {label && <label className="kl-field__label" htmlFor={inputId}>{label}</label>}
      {body}
      {(error || hint) && (
        <span className={`kl-field__hint ${error ? "kl-field__hint--error" : ""}`}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
