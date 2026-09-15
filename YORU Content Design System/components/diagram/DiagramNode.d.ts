import * as React from "react";
/** One box in a diagram. Placed by <Diagram>; usable standalone for a single labelled node. */
export interface DiagramNodeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Semantic role. Drives border weight / style, fill and the mono role label — not a hue, never a side bar. */
  role?: "input" | "process" | "human" | "agent" | "tool" | "data" | "output" | "external";
  /** Verification state. Renders as a small coloured dot, top-right. */
  status?: "verified" | "failed" | "unknown";
  label?: React.ReactNode;
  /** Second line, mono — a command, a model name, a duration. */
  meta?: React.ReactNode;
  /** Step number, printed before the role label. */
  index?: number;
  /** Hide the uppercase role label when the legend already says it. */
  showRole?: boolean;
  /** Spell the status out next to the dot. */
  statusLabel?: boolean;
  /** Absolute placement, set by <Diagram>. Leave undefined to flow in normal layout. */
  x?: number; y?: number; w?: number; h?: number;
}
export declare function DiagramNode(props: DiagramNodeProps): JSX.Element;
