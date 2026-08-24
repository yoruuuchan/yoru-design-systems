import React from "react";

/**
 * RIFT — glass-surfaced card with hover lift.
 */
export function Card({ className = "", children, ...rest }) {
  return (
    <div className={["rift-card", className].filter(Boolean).join(" ")} {...rest}>
      {children}
    </div>
  );
}
