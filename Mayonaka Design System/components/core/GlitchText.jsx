import React from "react";

/** Decorative RGB-split glitch text. Avoids JS — pure CSS clip + transform. */
export function GlitchText({ children, color = "#fff", size = 32, style, as: As = "span" }) {
  const text = typeof children === "string" ? children : "";
  return (
    <As
      data-text={text}
      style={{
        position: "relative",
        display: "inline-block",
        fontFamily: "var(--font-display)",
        fontSize: size,
        color,
        letterSpacing: "0.08em",
        lineHeight: 1.1,
        ...style,
      }}
    >
      <span style={{
        position: "absolute", left: 0, top: 0, width: "100%",
        color: "var(--magenta)", transform: "translate(-2px, 0)",
        clipPath: "polygon(0 0,100% 0,100% 45%,0 45%)", pointerEvents: "none",
      }} aria-hidden="true">{text}</span>
      <span style={{
        position: "absolute", left: 0, top: 0, width: "100%",
        color: "var(--cyan)", transform: "translate(2px, 0)",
        clipPath: "polygon(0 55%,100% 55%,100% 100%,0 100%)", pointerEvents: "none",
      }} aria-hidden="true">{text}</span>
      <span style={{ position: "relative" }}>{children}</span>
    </As>
  );
}
