export interface HandNoteProps {
  children?: React.ReactNode;
  /** Signature line, set in the same hand. */
  attribution?: string;
  /** Renders on a torn paper slip with a print shadow. */
  slip?: boolean;
  rotate?: number;
  /** Font size in px — the hand runs larger than body copy. Default 21. */
  size?: number;
  align?: "left" | "center" | "right";
  style?: React.CSSProperties;
}
export declare function HandNote(props: HandNoteProps): JSX.Element;
