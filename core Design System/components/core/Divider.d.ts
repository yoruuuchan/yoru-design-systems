import * as React from 'react';

export interface DividerProps extends React.HTMLAttributes<HTMLElement> {
  /** dashed (default · for prose) / solid (sections) / block (░▒▓ ornament) */
  variant?: 'dashed' | 'solid' | 'block';
  /** Only with variant="block" — short label centered in the block run. */
  label?: string;
}

/** Horizontal rule. The `block` variant uses unicode block characters as ornament. */
export function Divider(props: DividerProps): JSX.Element;
