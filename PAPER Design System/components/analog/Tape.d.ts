export interface TapeProps {
  width?: number;
  height?: number;
  /** Degrees. Keep between -4 and 4 — more reads as scrapbook. */
  rotate?: number;
  tone?: "kraft" | "clear" | "dark";
  style?: React.CSSProperties;
}
export declare function Tape(props: TapeProps): JSX.Element;
