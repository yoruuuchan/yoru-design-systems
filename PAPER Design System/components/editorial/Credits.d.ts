export interface CreditItem { role: string; name: React.ReactNode }
export interface CreditsProps {
  items?: CreditItem[];
  /** Heading above the list; pass "" to omit. */
  title?: string;
  /** rows = ruled two-column list, stack = label-over-value blocks. */
  layout?: "rows" | "stack";
  style?: React.CSSProperties;
}
export declare function Credits(props: CreditsProps): JSX.Element;
