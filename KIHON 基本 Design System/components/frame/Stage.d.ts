/**
 * Full-frame video stage. Renders the anodized-metal ground with procedural grain and lens
 * falloff, applies the measured safe areas (landscape 6%/9%, portrait 7.5%/6%) and exposes
 * the format-relative canvas unit as the CSS custom property --u (u = renderedWidth / 1920
 * landscape, / 1080 portrait) so design-px tokens scale. The frame edges stay clean — no
 * chrome, no strip, no seam; identity comes from material, type and timing.
 * 9:16 and 16:9 are two native layouts — never reflow one into the other.
 */
export interface StageProps {
  /** 'landscape' 16:9 (default) or 'portrait' 9:16 — a different native layout, not a squeeze. */
  format?: 'landscape' | 'portrait';
  /** Palette: 'gin' silver anodized (default) or 'kuro' black anodized. */
  theme?: 'gin' | 'kuro';
  /** Grain overlay on the ground. Default true. */
  grain?: boolean;
  /** Show the safe-area guide (authoring aid). Default false. */
  safe?: boolean;
  /** Lens falloff on the ground — light comes from a lens, not a lightbox. Default true. */
  falloff?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Stage(props: StageProps): JSX.Element;