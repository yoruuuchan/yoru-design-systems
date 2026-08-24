import React from "react";

/**
 * RIFT wordmark — combines the Chakra Petch wordmark font with the
 * chromatic glitch effect. Pure preset of <Glitch>.
 */
export function Wordmark({
  text = "RIFT",
  size = "var(--text-4xl)",
  className = "",
  style,
  ...rest
}) {
  return (
    <span
      className={["rift-glitch", className].filter(Boolean).join(" ")}
      data-text={text}
      style={{
        fontFamily: "var(--font-wordmark)",
        fontWeight: 700,
        letterSpacing: "0.04em",
        fontSize: size,
        ...style,
      }}
      {...rest}
    >
      {text}
    </span>
  );
}
