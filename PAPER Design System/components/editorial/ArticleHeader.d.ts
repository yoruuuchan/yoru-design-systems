export interface ArticleHeaderProps {
  /** Section or genre, set in mono rust: "Photo Essay", "Interview", "Field Notes". */
  kicker?: string;
  title?: React.ReactNode;
  /** Trailing words set in display italic — the one emphasis move in the system. */
  emphasis?: string;
  /** One sentence of context. Italic serif, never more than two lines. */
  standfirst?: string;
  size?: "sm" | "md" | "lg" | "xl";
  align?: "left" | "center";
  /** Overrides the 16ch title measure. */
  maxWidth?: string;
  style?: React.CSSProperties;
}
export declare function ArticleHeader(props: ArticleHeaderProps): JSX.Element;
