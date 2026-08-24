import * as React from "react";

export interface SelectOption {
  value: string;
  label: string;
}

/**
 * Native select with KUNLUN's chamfered well and cyan chevron.
 * Pass either `options` (string or {value,label}) or `<option>` children.
 */
export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "children"> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  options?: (string | SelectOption)[];
  children?: React.ReactNode;
}

export declare function Select(props: SelectProps): JSX.Element;
