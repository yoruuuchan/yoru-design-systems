import * as React from "react";

export interface TabItem {
  value: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  /** Numeric badge after the label. */
  count?: number;
  disabled?: boolean;
  /** Content rendered when this tab is active (uncontrolled). */
  content?: React.ReactNode;
}

/**
 * Tabbed navigation. Chamfered top-edge with a cyan glow indicator.
 * Use `value`+`onChange` for controlled mode, or pass `defaultValue`.
 * For controlled content, ignore `content` on tabs and render `children`.
 */
export interface TabsProps {
  tabs: TabItem[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
  /** Override per-tab `content` — render here instead. */
  children?: React.ReactNode;
}

export declare function Tabs(props: TabsProps): JSX.Element;
