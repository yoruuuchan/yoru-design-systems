import * as React from 'react';

export interface TabItem {
  id: string;
  label: React.ReactNode;
}

export interface TabBarProps {
  /** Either a list of strings (id == label) or {id, label} objects. */
  items: Array<string | TabItem>;
  /** id of the selected tab. */
  value: string;
  onChange?: (id: string) => void;
  style?: React.CSSProperties;
}

/** Y2K file-folder tab strip — the selected tab "lifts" over the body border. */
export function TabBar(props: TabBarProps): JSX.Element;
