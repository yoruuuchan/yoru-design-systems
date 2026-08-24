export interface ModeBadgeProps {
  mode?: "editorial" | "analog";
  /** Diameter in px. */
  size?: number;
  /** Shows the mode name and its one-line description beside the disc. */
  label?: boolean;
  style?: React.CSSProperties;
}
export declare function ModeBadge(props: ModeBadgeProps): JSX.Element;
