import React from "react";

export function Input({
  label,
  hint,
  error,
  prefix,
  icon,
  value,
  onChange,
  placeholder,
  type = "text",
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const borderColor = error
    ? "var(--danger)"
    : focus
    ? "var(--cyan)"
    : "var(--border-default)";
  const boxShadow = focus && !error
    ? "var(--glow-cyan-sm)"
    : error
    ? "var(--glow-magenta-sm)"
    : "none";

  return (
    <label style={{ display: "block", fontFamily: "var(--font-body)", color: "var(--text-primary)", ...style }}>
      {label && (
        <div style={{
          fontFamily: "var(--font-display)",
          fontSize: "9px",
          letterSpacing: "0.18em",
          color: error ? "var(--danger)" : "var(--text-secondary)",
          textTransform: "uppercase",
          marginBottom: "var(--s-2)",
        }}>
          {label}
        </div>
      )}
      <div style={{
        display: "flex",
        alignItems: "center",
        background: "var(--bg-void)",
        border: `2px solid ${borderColor}`,
        boxShadow,
        padding: "8px 12px",
        gap: "8px",
        transition: "border-color var(--dur-fast), box-shadow var(--dur-fast)",
      }}>
        {prefix && <span style={{ color: "var(--magenta)", fontSize: "16px" }}>{prefix}</span>}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            flex: 1,
            background: "transparent",
            border: "none",
            outline: "none",
            color: "var(--text-primary)",
            fontFamily: "var(--font-body)",
            fontSize: "18px",
            caretColor: "var(--magenta)",
            padding: 0,
          }}
          {...rest}
        />
        {icon && <span style={{ color: "var(--text-muted)" }}>{icon}</span>}
      </div>
      {(hint || error) && (
        <div style={{
          fontSize: "13px",
          marginTop: "var(--s-2)",
          color: error ? "var(--danger)" : "var(--text-muted)",
        }}>
          {error || hint}
        </div>
      )}
    </label>
  );
}
