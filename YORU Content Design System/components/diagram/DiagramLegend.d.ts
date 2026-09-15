/** Key for the roles, edge kinds and statuses a diagram actually uses. */
export interface DiagramLegendProps {
  roles?: ("input" | "process" | "human" | "agent" | "tool" | "data" | "output" | "external")[];
  statuses?: ("verified" | "failed" | "unknown")[];
  edges?: ("flow" | "data" | "dep" | "weak")[];
  style?: React.CSSProperties;
}
export declare function DiagramLegend(props: DiagramLegendProps): JSX.Element;
