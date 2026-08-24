export interface DateStampProps {
  /** Written the way a camera back prints it: "APR 12 2026", "14 · 02 · 26". */
  date?: string;
  variant?: "plain" | "boxed" | "round";
  rotate?: number;
  style?: React.CSSProperties;
}
export declare function DateStamp(props: DateStampProps): JSX.Element;
