/** Margin note sitting in the diagram's outer margin at its anchor's height, with a short leader stub. Two lines of text maximum. */
export interface DiagramAnnotationProps {
  text?: React.ReactNode;
  /** Left edge of the note, in scene coordinates. <Diagram> puts this in the outer margin. */
  x?: number; y?: number;
  /** Which margin the note sits in. */
  side?: "left" | "right";
  width?: number;
  style?: React.CSSProperties;
}
export declare function DiagramAnnotation(props: DiagramAnnotationProps): JSX.Element;
