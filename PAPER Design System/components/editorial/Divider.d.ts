export interface DividerProps {
  /** hair = within a section, rule/heavy = between sections, double = chapter break,
   *  ornament = centred § or a label, space = whitespace only. */
  variant?: "hair" | "rule" | "heavy" | "double" | "ornament" | "space";
  /** Margin above and below. */
  space?: string;
  /** Text set between two hairlines, e.g. "Notes", "II". */
  label?: string;
  style?: React.CSSProperties;
}
export declare function Divider(props: DividerProps): JSX.Element;
