import * as React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Square button size (22 / 28 / 36 px). */
  size?: 'sm' | 'md' | 'lg';
  /** Accessible label — also rendered as the native tooltip. Required. */
  label: string;
  /** The icon. Pass an inline SVG, an <img>, or a unicode glyph. */
  children: React.ReactNode;
}

/** Square Y2K-bevel button for a single pixel icon — toolbar / titlebar / close-box. */
export function IconButton(props: IconButtonProps): JSX.Element;
