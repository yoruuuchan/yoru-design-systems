// KIHON motion system — all animation helpers.
// Three curves only, no fourth. Constants from tokens/motion.css.

import { spring, interpolate, Easing } from "remotion";

// --- Spring configs ---
export const POP_CONFIG = { stiffness: 150, damping: 14, mass: 1 } as const;
export const SURFACE_CONFIG = { stiffness: 190, damping: 22, mass: 1 } as const;

// --- Text easing (NEVER overshoots) ---
const TEXT_EASING = Easing.bezier(0.16, 1, 0.3, 1);

// --- Locked constants (@30fps) ---
export const FADE_F = 8;
export const RISE_PX = 24;
export const STAGGER_F = 8;
export const PHASE_F = 18;
export const DRAW_F = 10;
export const COUNTER_F = 24;
export const ROW_STEP_F = 7;
export const HOLD_MIN_F = 26;

/** Compute hold frames from Chinese character count. */
export function holdFrames(hanziCount: number): number {
  return Math.max(HOLD_MIN_F, Math.ceil(hanziCount * 7.5));
}

/** Text entrance: fade 8f + rise 24px, text curve. Never overshoots. */
export function textEntrance(frame: number, startFrame: number) {
  const f = frame - startFrame;
  if (f < 0) return { opacity: 0, transform: `translateY(${RISE_PX}px)` };

  const opacity = interpolate(f, [0, FADE_F], [0, 1], {
    easing: TEXT_EASING,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const y = interpolate(f, [0, FADE_F], [RISE_PX, 0], {
    easing: TEXT_EASING,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return { opacity, transform: `translateY(${y}px)` };
}

/** Panel entrance: opacity via text easing 8f, rise+scale via surface spring. */
export function panelEntrance(frame: number, startFrame: number, fps: number) {
  const f = frame - startFrame;
  if (f < 0)
    return { opacity: 0, transform: `translateY(${RISE_PX}px) scale(0.985)` };

  const opacity = interpolate(f, [0, FADE_F], [0, 1], {
    easing: TEXT_EASING,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const sv = spring({ fps, frame: f, config: SURFACE_CONFIG });
  const y = RISE_PX * (1 - sv);
  const scale = 0.985 + 0.015 * sv;
  return { opacity, transform: `translateY(${y}px) scale(${scale})` };
}

/** Bar growth: pop spring drives height 0..1. No fade, no scaleY. */
export function barGrowth(
  frame: number,
  startFrame: number,
  fps: number,
): number {
  const f = frame - startFrame;
  if (f < 0) return 0;
  return spring({ fps, frame: f, config: POP_CONFIG });
}

/** Rule draw: scaleX 0->1 from left, text curve, 10f. */
export function ruleEntrance(frame: number, startFrame: number) {
  const f = frame - startFrame;
  if (f < 0) return { transform: "scaleX(0)", transformOrigin: "left" as const };

  const scaleX = interpolate(f, [0, DRAW_F], [0, 1], {
    easing: TEXT_EASING,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return { transform: `scaleX(${scaleX})`, transformOrigin: "left" as const };
}

/** Counter: digits settle from 0 to target over 24f, ease-out cubic. */
export function counterValue(
  frame: number,
  startFrame: number,
  target: number,
): number {
  const f = frame - startFrame;
  if (f < 0) return 0;

  const progress = interpolate(f, [0, COUNTER_F], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return Math.round(progress * target);
}

/** Pop entrance: scale 0->1 via pop spring. No fade. */
export function popEntrance(frame: number, startFrame: number, fps: number) {
  const f = frame - startFrame;
  if (f < 0) return { transform: "scale(0)" };

  const sv = spring({ fps, frame: f, config: POP_CONFIG });
  return { transform: `scale(${sv})` };
}
