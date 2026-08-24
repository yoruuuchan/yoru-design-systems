import React from "react";

/**
 * Select — native select with a custom cyan chevron + chamfered well.
 */
export function Select({
  label,
  hint,
  error,
  options = [],
  id,
  className = "",
  children,
  ...rest
}) {
  const autoId = React.useId();
  const inputId = id || autoId;
  const cls = ["kl-select", error ? "kl-select--error" : "", className]
    .filter(Boolean).join(" ");
  return (
    <div className="kl-field">
      {label && <label className="kl-field__label" htmlFor={inputId}>{label}</label>}
      <select id={inputId} className={cls} {...rest}>
        {children || options.map((o) => {
          const opt = typeof o === "string" ? { value: o, label: o } : o;
          return <option key={opt.value} value={opt.value}>{opt.label}</option>;
        })}
      </select>
      {(error || hint) && (
        <span className={`kl-field__hint ${error ? "kl-field__hint--error" : ""}`}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
