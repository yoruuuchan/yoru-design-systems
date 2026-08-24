import React from "react";
import { Plate } from "./Plate.jsx";

/** Plate + caption. The caption is the second half of the image, not an afterthought. */
export function Figure({ number, caption, credit, ratio = "3/2", src, alt = "", children, align = "below", tone, shadow, style, ...rest }) {
  const cap = (
    <figcaption style={{
      display: align === "side" ? "block" : "flex", gap: "var(--space-3)",
      marginTop: align === "side" ? 0 : "var(--space-3)",
      fontFamily: "var(--font-sans)", fontSize: "var(--type-caption)",
      lineHeight: "var(--leading-caption)", color: "var(--text-muted)", maxWidth: "62ch"
    }}>
      {number && <span style={{ fontFamily: "var(--font-mono)", color: "var(--text-accent)", flex: "none", display: align === "side" ? "block" : "inline", marginBottom: align === "side" ? 6 : 0 }}>{number}</span>}
      <span>{caption}{credit && <span style={{ color: "var(--text-faint)" }}>{caption ? " " : ""}{credit}</span>}</span>
    </figcaption>
  );
  if (align === "side") return (
    <figure style={{ display: "grid", gridTemplateColumns: "1fr 168px", gap: "var(--space-5)", alignItems: "start", ...style }} {...rest}>
      <Plate ratio={ratio} src={src} alt={alt} tone={tone} shadow={shadow}>{children}</Plate>{cap}
    </figure>
  );
  return (
    <figure style={{ ...style }} {...rest}>
      <Plate ratio={ratio} src={src} alt={alt} tone={tone} shadow={shadow}>{children}</Plate>{cap}
    </figure>
  );
}
