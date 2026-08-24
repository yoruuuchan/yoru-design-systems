import React from "react";

/**
 * RIFT — small status indicator (the dot alone, without the badge body).
 */
export function Dot({ variant = "ok", className = "", ...rest }) {
  const cls = [
    "rift-dot",
    variant === "ok"   && "rift-dot--ok",
    variant === "warn" && "rift-dot--warn",
    variant === "bad"  && "rift-dot--bad",
    className,
  ].filter(Boolean).join(" ");
  return <span className={cls} {...rest} />;
}
