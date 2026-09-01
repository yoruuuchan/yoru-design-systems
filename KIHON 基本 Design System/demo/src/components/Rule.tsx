// Rule — a 1px horizontal line, drawn not faded.

import React from "react";

interface RuleProps {
  tone?: "default" | "strong";
  style?: React.CSSProperties;
}

export const Rule: React.FC<RuleProps> = ({ tone = "default", style }) => {
  return (
    <div
      style={{
        height: 1,
        backgroundColor:
          tone === "strong" ? "var(--line-strong)" : "var(--line)",
        ...style,
      }}
    />
  );
};
