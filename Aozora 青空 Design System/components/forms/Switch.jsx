import React from "react";

const SIZES = {
  sm: { w: 36, h: 22, knob: 18, pad: 2 },
  md: { w: 48, h: 28, knob: 24, pad: 2 },
};

export function Switch({
  checked,
  defaultChecked = false,
  disabled = false,
  size = "md",
  label,
  onChange,
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked);
  const on = isControlled ? checked : internal;
  const s = SIZES[size] || SIZES.md;

  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };

  const trackStyle = {
    width: s.w,
    height: s.h,
    borderRadius: 999,
    background: on ? "var(--blue-500)" : "var(--neutral-300)",
    boxShadow: on
      ? "inset 0 1px 2px rgba(0,68,140,0.4), 0 0 0 1px rgba(10,132,255,0.2)"
      : "inset 0 1px 2px rgba(10,68,140,0.15)",
    position: "relative",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "background var(--dur-base) var(--ease-out-quart)",
    flex: "none",
  };

  const knobStyle = {
    position: "absolute",
    top: s.pad,
    left: on ? s.w - s.knob - s.pad : s.pad,
    width: s.knob,
    height: s.knob,
    borderRadius: "50%",
    background: "#fff",
    boxShadow: "0 1px 2px rgba(0,0,0,0.1), 0 2px 6px rgba(10,68,140,0.18)",
    transition: "left var(--dur-base) var(--ease-spring)",
  };

  const wrapper = label
    ? { display: "inline-flex", alignItems: "center", gap: 10, cursor: disabled ? "not-allowed" : "pointer" }
    : null;

  const track = React.createElement(
    "div",
    {
      role: "switch",
      "aria-checked": on,
      tabIndex: disabled ? -1 : 0,
      style: trackStyle,
      onClick: toggle,
      onKeyDown: (e) => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); toggle(); } },
    },
    React.createElement("div", { style: knobStyle }),
  );

  if (!label) return track;
  return React.createElement(
    "label",
    { style: wrapper, onClick: (e) => { e.preventDefault(); toggle(); } },
    track,
    React.createElement("span", { style: { fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500, color: "var(--text-body)" } }, label),
  );
}
