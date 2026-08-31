/**
 * The KIHON signature motif: a band of fine ticks (1px tooth, 5px pitch), taken from lens
 * focus rings. Divider by default. With progress it becomes a track that DETENTS: the elapsed
 * width snaps to the nearest whole tooth pitch, so the boundary always lands in a gap and no
 * tooth is ever sliced — a knob with click-stops rather than a bar with a ragged edge. The
 * boundary itself gets a full-height accent tooth. Available, not standing decoration: frames
 * carry no knurl by default.
 */
export interface KnurlProps {
  /** 0..1 — elapsed span, snapped to tooth pitch and rendered in accent. Omit for a plain divider. */
  progress?: number;
  tone?: 'line' | 'strong';
  style?: React.CSSProperties;
}
export declare function Knurl(props: KnurlProps): JSX.Element;