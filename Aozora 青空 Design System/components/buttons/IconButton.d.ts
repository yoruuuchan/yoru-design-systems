/**
 * Square / circular button for a single icon.
 *
 * Same variant + tone language as Button. Used in toolbars, headers,
 * floating action contexts, and dense lists.
 */
export interface IconButtonProps {
  variant?: "filled" | "glass" | "ghost";
  tone?: "brand" | "accent" | "neutral" | "danger";
  size?: "sm" | "md" | "lg";
  /** Shape — square (default) or full circle. */
  shape?: "square" | "circle";
  disabled?: boolean;
  /** Required for accessibility. */
  "aria-label": string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Icon node — keep at ~16/18/20px. */
  children: React.ReactNode;
}

export declare function IconButton(props: IconButtonProps): JSX.Element;
