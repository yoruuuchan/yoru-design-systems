import React from "react";

const SIZES = {
  sm: { h: 32, px: 12, fs: 13, label: 11 },
  md: { h: 40, px: 14, fs: 14, label: 12 },
  lg: { h: 52, px: 18, fs: 16, label: 13 },
};

export function Input({
  label,
  helper,
  error,
  variant = "glass",
  size = "md",
  leadingIcon,
  disabled = false,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const hasError = !!error;

  let bg, border, shadow, backdrop;
  if (variant === "glass") {
    // 0.42 fill is a touch lower than --glass-bg-regular (0.48) — closest existing token
    bg = "var(--glass-bg-regular)";
    border = `1px solid ${hasError ? "var(--danger-500)" : focus ? "var(--blue-500)" : "var(--glass-stroke)"}`;
    shadow = focus
      ? "var(--ring-focus), var(--glass-edge)"
      : "var(--glass-edge), var(--shadow-sm)";
    backdrop = "blur(28px) saturate(200%) brightness(1.08)";
  } else {
    bg = "var(--neutral-0)";
    border = `1px solid ${hasError ? "var(--danger-500)" : focus ? "var(--blue-500)" : "var(--stroke-subtle)"}`;
    shadow = focus ? "var(--ring-focus)" : "none";
    backdrop = "none";
  }

  const wrapperStyle = {
    display: "flex",
    alignItems: "center",
    gap: 8,
    height: s.h,
    padding: `0 ${s.px}px`,
    background: bg,
    border,
    borderRadius: "var(--radius-md)",
    boxShadow: shadow,
    backdropFilter: backdrop,
    WebkitBackdropFilter: backdrop,
    opacity: disabled ? 0.5 : 1,
    transition: "border-color var(--dur-fast) var(--ease-out-quart), box-shadow var(--dur-fast) var(--ease-out-quart)",
  };

  const inputStyle = {
    flex: 1,
    minWidth: 0,
    height: "100%",
    border: "none",
    outline: "none",
    background: "transparent",
    color: "var(--text-strong)",
    fontFamily: "var(--font-sans)",
    fontSize: s.fs,
    fontWeight: 500,
  };

  return React.createElement(
    "label",
    { style: { display: "flex", flexDirection: "column", gap: 6 } },
    label
      ? React.createElement(
          "span",
          { style: { fontFamily: "var(--font-sans)", fontSize: s.label, fontWeight: 600, color: "var(--text-strong)", letterSpacing: "-0.005em" } },
          label,
        )
      : null,
    React.createElement(
      "div",
      { style: wrapperStyle },
      leadingIcon
        ? React.createElement("span", { style: { display: "inline-flex", color: "var(--text-muted)", width: 16, height: 16 } }, leadingIcon)
        : null,
      React.createElement("input", {
        ...rest,
        disabled,
        style: inputStyle,
        onFocus: (e) => { setFocus(true); rest.onFocus && rest.onFocus(e); },
        onBlur: (e) => { setFocus(false); rest.onBlur && rest.onBlur(e); },
      }),
    ),
    (helper || error)
      ? React.createElement(
          "span",
          { style: { fontFamily: "var(--font-sans)", fontSize: 11, color: hasError ? "var(--text-danger)" : "var(--text-muted)" } },
          error || helper,
        )
      : null,
  );
}
