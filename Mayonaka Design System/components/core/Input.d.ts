import { ReactNode, CSSProperties, ChangeEvent } from "react";

/**
 * Pixel input with a CRT caret. Focused state lights up cyan; error state glows magenta.
 */
export interface InputProps {
  label?: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  prefix?: ReactNode;
  icon?: ReactNode;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  style?: CSSProperties;
}

export function Input(props: InputProps): JSX.Element;
