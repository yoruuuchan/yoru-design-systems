import React from "react";

const sizeMap = {
  sm: { padding: "6px var(--s-3)", fontSize: "10px" },
  md: { padding: "10px 18px", fontSize: "12px" },
  lg: { padding: "14px var(--s-5)", fontSize: "14px" },
};

const variantStyle = (variant) => {
  switch (variant) {
    case "primary":
      return {
        background: "var(--magenta)",
        color: "var(--void)",
        border: "2px solid var(--magenta)",
        boxShadow: "var(--shadow-pixel)",
      };
    case "cyan":
      return {
        background: "var(--cyan)",
        color: "var(--void)",
        border: "2px solid var(--cyan)",
        boxShadow: "var(--shadow-pixel)",
      };
    case "blue":
      return {
        background: "var(--electric)",
        color: "var(--chrome)",
        border: "2px solid var(--electric)",
        boxShadow: "var(--shadow-pixel)",
      };
    case "blue-outline":
      return {
        background: "transparent",
        color: "var(--azure)",
        border: "2px solid var(--electric)",
        boxShadow: "none",
      };
    case "ghost":
      return {
        background: "transparent",
        color: "var(--magenta)",
        border: "2px solid var(--magenta)",
        boxShadow: "none",
      };
    case "outline":
      return {
        background: "transparent",
        color: "var(--cyan)",
        border: "2px solid var(--cyan)",
        boxShadow: "none",
      };
    case "danger":
      return {
        background: "var(--danger)",
        color: "var(--void)",
        border: "2px solid var(--danger)",
        boxShadow: "var(--shadow-pixel)",
      };
    default:
      return {};
  }
};

export function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  glow = false,
  fullWidth = false,
  children,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const base = {
    fontFamily: "var(--font-display)",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "transform var(--dur-fast) var(--ease-smooth), box-shadow var(--dur-fast) var(--ease-smooth), filter var(--dur-fast) var(--ease-smooth)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--s-2)",
    width: fullWidth ? "100%" : undefined,
    opacity: disabled ? 0.4 : 1,
    imageRendering: "pixelated",
    ...sizeMap[size],
    ...variantStyle(variant),
  };

  const interactive = !disabled && (hover || active)
    ? {
        transform: active ? "translate(2px, 2px)" : "translate(-1px, -1px)",
        boxShadow: active
          ? "1px 1px 0 var(--shadow-ink)"
          : (variant === "ghost" || variant === "outline"
              ? (variant === "ghost" ? "var(--glow-magenta-sm)" : "var(--glow-cyan-sm)")
              : "5px 5px 0 var(--shadow-ink)"),
        filter: glow ? "brightness(1.1)" : undefined,
      }
    : glow
    ? { boxShadow: variant === "cyan" || variant === "outline"
        ? "var(--shadow-pixel), var(--glow-cyan-sm)"
        : variant === "blue" || variant === "blue-outline"
        ? "var(--shadow-pixel), var(--glow-blue-sm)"
        : "var(--shadow-pixel), var(--glow-magenta-sm)" }
    : {};

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{ ...base, ...interactive, ...style }}
      {...rest}
    >
      {children}
    </button>
  );
}
