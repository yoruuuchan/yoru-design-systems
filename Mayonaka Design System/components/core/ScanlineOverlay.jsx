import React from "react";

/** Decorative scanline + grain overlay. Wrap any region. */
export function ScanlineOverlay({ intensity = "medium", grain = true, children, style }) {
  const stripeAlpha = intensity === "soft" ? 0.15 : intensity === "strong" ? 0.4 : 0.25;
  return (
    <div style={{ position: "relative", ...style }}>
      {children}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: `repeating-linear-gradient(to bottom,
            rgba(0,0,0,0) 0px, rgba(0,0,0,0) 2px,
            rgba(0,0,0,${stripeAlpha}) 3px, rgba(0,0,0,${stripeAlpha}) 4px)`,
          mixBlendMode: "multiply",
        }}
      />
      {grain && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: "radial-gradient(circle at 30% 20%, rgba(255,43,214,.08), transparent 60%), radial-gradient(circle at 70% 80%, rgba(25,230,255,.08), transparent 60%)",
            mixBlendMode: "screen",
          }}
        />
      )}
    </div>
  );
}
