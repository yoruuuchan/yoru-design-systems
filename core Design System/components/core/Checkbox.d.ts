import * as React from 'react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'children'> {
  /** Inline label content. */
  children?: React.ReactNode;
}

/** Y2K checkbox — sunken 14px square with a pixel '×' when checked. */
export function Checkbox(props: CheckboxProps): JSX.Element;
