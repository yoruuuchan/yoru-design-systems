export interface FigureProps {
  /** Plate reference, set in mono rust: "Fig. 01", "Pl. 12", "03". */
  number?: string;
  caption?: React.ReactNode;
  /** Photographer or archive line — set fainter, after the caption. */
  credit?: string;
  ratio?: string;
  src?: string;
  alt?: string;
  children?: React.ReactNode;
  /** below (default) or side — caption in a 168px column to the right. */
  align?: "below" | "side";
  tone?: "warm" | "cool" | "dark";
  shadow?: boolean;
  style?: React.CSSProperties;
}
export declare function Figure(props: FigureProps): JSX.Element;
