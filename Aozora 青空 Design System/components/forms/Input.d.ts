/**
 * Text input — light glass treatment by default.
 * Supports label, helper, error states, and an optional leading icon.
 */
export interface InputProps {
  /** Field label rendered above the control. */
  label?: string;
  /** Helper text below — hint or context. */
  helper?: string;
  /** Error message; turns the field danger-tone when set. */
  error?: string;
  /** Visual treatment. Default `glass`. */
  variant?: "glass" | "solid";
  /** Size. Default `md`. */
  size?: "sm" | "md" | "lg";
  /** Leading icon node. */
  leadingIcon?: React.ReactNode;
  /** Standard input attributes. */
  type?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export declare function Input(props: InputProps): JSX.Element;
