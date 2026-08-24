import React from "react";

/**
 * RIFT — text input. Glass-backed with royal focus ring.
 * Use the wrapper `<Input.Label>` if a label is needed.
 */
export function Input({ className = "", ...rest }) {
  return (
    <input
      className={["rift-input", className].filter(Boolean).join(" ")}
      {...rest}
    />
  );
}
