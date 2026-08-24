import { ReactNode, CSSProperties } from "react";

export interface TabItem {
  label: ReactNode;
  value?: string;
}

/** Underlined pixel tabs. Active tab glows magenta. */
export interface TabsProps {
  tabs: TabItem[];
  value: string;
  onChange?: (value: string) => void;
  style?: CSSProperties;
}

export function Tabs(props: TabsProps): JSX.Element;
