import React from "react";
import { Plate } from "./Plate.jsx";

/** The opening image of a page or spread. Optionally full-bleed, optionally with an overlaid title. */
export function HeroImage({ ratio = "16/7", src, alt = "", children, bleed = false, caption, number, overlay, align = "end", style, ...rest }) {
  return (
    <figure style={{
      margin: 0,
      width: bleed ? "100vw" : "auto",
      marginLeft: bleed ? "50%" : 0,
      transform: bleed ? "translateX(-50vw)" : "none", ...style
    }} {...rest}>
      <div style={{ position: "relative" }}>
        <Plate ratio={ratio} src={src} alt={alt}>{children}</Plate>
        {overlay && (
          <div style={{
            position: "absolute", inset: 0, display: "grid", alignItems: align,
            padding: "var(--space-7)", pointerEvents: "none"
          }}>
            <div style={{ color: "var(--paper-100)", textShadow: "0 1px 24px rgba(20,18,14,.5)" }}>{overlay}</div>
          </div>
        )}
      </div>
      {(caption || number) && (
        <figcaption style={{
          display: "flex", gap: "var(--space-3)", marginTop: "var(--space-3)",
          padding: bleed ? "0 var(--page-margin)" : 0,
          fontFamily: "var(--font-sans)", fontSize: "var(--type-caption)",
          color: "var(--text-muted)", maxWidth: "62ch"
        }}>
          {number && <span style={{ fontFamily: "var(--font-mono)", color: "var(--text-accent)", flex: "none" }}>{number}</span>}
          <span>{caption}</span>
        </figcaption>
      )}
    </figure>
  );
}
