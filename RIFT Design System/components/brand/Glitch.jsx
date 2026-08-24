import React from "react";

/**
 * RIFT — chromatic-split glitch text. Wrap the same text twice
 * (data-text + children) to feed the ::before / ::after channels.
 * Intensity is controlled by `data-glitch` on any ancestor.
 */
export function Glitch({ text, as: Tag = "span", className = "", style, ...rest }) {
  return (
    <Tag
      className={["rift-glitch", className].filter(Boolean).join(" ")}
      data-text={text}
      style={style}
      {...rest}
    >
      {text}
    </Tag>
  );
}
