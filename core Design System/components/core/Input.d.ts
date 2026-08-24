import * as React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style'> {
  /** Optional label rendered above the field. */
  label?: string;
  /** Use VT323 pixel-mono in the field — for filenames, paths, IDs. */
  mono?: boolean;
  /** Inline style for the <input>. */
  style?: React.CSSProperties;
  /** Inline style for the wrapping <label>. */
  wrapStyle?: React.CSSProperties;
}

/** Sunken Y2K text input. Tinos serif by default; opt into pixel-mono via `mono`. */
export function Input(props: InputProps): JSX.Element;
