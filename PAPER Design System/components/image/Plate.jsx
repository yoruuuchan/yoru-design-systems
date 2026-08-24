import React from "react";

/** The base image frame. Every photograph in PAPER goes through this: fixed ratio,
 *  1px inset rule, mode-aware tone. Pass children to fill it with an <image-slot>. */
export function Plate({ ratio = "3/2", src, alt = "", children, tone = "warm", frame = true, shadow = false, label, style, ...rest }) {
  const bg = tone === "cool" ? "var(--placeholder-tone-cool)" : tone === "dark" ? "var(--surface-dark)" : "var(--placeholder-tone)";
  return (
    <div style={{
      position: "relative", aspectRatio: ratio, background: bg, overflow: "hidden",
      boxShadow: (frame ? "var(--shadow-inset-frame)" : "none") + (shadow ? ", var(--shadow-print)" : ""),
      filter: "var(--photo-filter, none)", ...style
    }} {...rest}>
      {src ? <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : children}
      {!src && !children && label && (
        <span style={{
          position: "absolute", left: 10, bottom: 8, fontFamily: "var(--font-mono)",
          fontSize: "var(--type-micro)", letterSpacing: ".1em", textTransform: "uppercase",
          color: "rgba(38,36,30,.42)"
        }}>{label}</span>
      )}
    </div>
  );
}
