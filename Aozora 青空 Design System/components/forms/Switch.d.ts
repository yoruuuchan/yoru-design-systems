/**
 * iOS-style switch. Uncontrolled by default; pass `checked` + `onChange`
 * to drive it.
 */
export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  size?: "sm" | "md";
  /** Optional inline label rendered to the right. */
  label?: string;
  onChange?: (next: boolean) => void;
}

export declare function Switch(props: SwitchProps): JSX.Element;
