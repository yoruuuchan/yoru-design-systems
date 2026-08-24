import * as React from "react";

export interface DataTableColumn<R = any> {
  key: string;
  header?: React.ReactNode;
  width?: number | string;
  align?: "left" | "right" | "center";
  /** Color treatment for cells in this column. */
  tone?: "num" | "id" | "muted" | "warn" | "danger";
  /** Custom cell renderer. Receives raw value + row. */
  render?: (value: any, row: R) => React.ReactNode;
}

/**
 * Compact mono data table with sticky header + cyan hover ribbon.
 */
export interface DataTableProps<R = any> {
  columns: DataTableColumn<R>[];
  rows: R[];
  striped?: boolean;
  /** Content shown when `rows` is empty. */
  emptyState?: React.ReactNode;
  className?: string;
}

export declare function DataTable<R = any>(props: DataTableProps<R>): JSX.Element;
