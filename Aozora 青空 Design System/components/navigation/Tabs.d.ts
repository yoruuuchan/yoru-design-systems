/**
 * Tabs — segmented pill OR underline. Pass `items` and `value`; component is
 * controlled.
 */
export interface TabItem {
  /** Unique key. */
  value: string;
  /** Visible label. */
  label: string;
  /** Optional badge count rendered after the label. */
  count?: number | string;
}

export interface TabsProps {
  items: TabItem[];
  value: string;
  onChange: (next: string) => void;
  /** Visual style. `segmented` is the iOS-style pill group; `underline` is editorial. */
  variant?: "segmented" | "underline";
  size?: "sm" | "md";
}

export declare function Tabs(props: TabsProps): JSX.Element;
