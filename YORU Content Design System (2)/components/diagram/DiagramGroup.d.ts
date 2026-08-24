/** Hairline container around a set of nodes, label knocked into the top rule. */
export interface DiagramGroupProps {
  label?: string;
  /** dashed reads as "boundary we do not control" — someone else's system, a sandbox. */
  kind?: "solid" | "dashed";
  x?: number; y?: number; w?: number; h?: number;
  style?: React.CSSProperties;
}
export declare function DiagramGroup(props: DiagramGroupProps): JSX.Element;
