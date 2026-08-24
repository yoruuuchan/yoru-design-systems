/**
 * Tag — larger chip, optionally removable. For filters, selected
 * keywords, multi-select inputs.
 */
export interface TagProps {
  tone?: "brand" | "accent" | "neutral";
  /** Show the trailing × and fire onRemove. */
  removable?: boolean;
  onRemove?: () => void;
  onClick?: () => void;
  /** Visually toggle selected/unselected. */
  selected?: boolean;
  children?: React.ReactNode;
}

export declare function Tag(props: TagProps): JSX.Element;
