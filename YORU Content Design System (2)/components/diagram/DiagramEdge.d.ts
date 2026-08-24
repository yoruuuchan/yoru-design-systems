/** A connector between two placed node boxes. Renders SVG; must sit inside <Diagram>'s svg layer. */
export interface EdgeBox { x: number; y: number; w: number; h: number }
export interface DiagramEdgeProps {
  from: EdgeBox;
  to: EdgeBox;
  /** flow = solid ink · data = solid accent · dep = dashed hairline · weak = dotted, no arrow. */
  kind?: "flow" | "data" | "dep" | "weak";
  /** Mono label knocked out over the line at its midpoint. Keep to 1–3 words. */
  label?: string;
  arrow?: boolean;
  /** Arrowheads at both ends. */
  both?: boolean;
  geo?: object;
}
export declare function DiagramEdge(props: DiagramEdgeProps): JSX.Element;
