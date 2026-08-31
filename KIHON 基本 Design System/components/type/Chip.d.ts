/**
 * State chip — neutral, selected (filled accent), active/after (accent soft + ✓/●),
 * before (✗ oxide red). Unicode instrument glyphs are the icon system; no icon font exists.
 */
export interface ChipProps {
  state?: 'neutral' | 'selected' | 'active' | 'before' | 'after';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Chip(props: ChipProps): JSX.Element;