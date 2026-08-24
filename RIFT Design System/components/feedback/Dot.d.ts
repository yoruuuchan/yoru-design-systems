import * as React from "react";

/**
 * Standalone glowing status dot — when the full `Badge` would be too heavy.
 * Pair with an adjacent label or use inside a table cell.
 */
export interface DotProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "ok" | "warn" | "bad";
}

export function Dot(props: DotProps): JSX.Element;
