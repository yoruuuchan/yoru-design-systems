// Act 3 — Compare: BEFORE panel + arrow + AFTER panel.
// Layout reference: CompareFrame.jsx

import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { Stage } from "../components/Stage";
import { Surface } from "../components/Surface";
import {
  textEntrance,
  panelEntrance,
  popEntrance,
  holdFrames,
  ROW_STEP_F,
  PHASE_F,
} from "../animations";

// --- Data ---
const BEFORE_ITEMS = [
  "hold 固定 26 帧，谁都可以不管它",
  "时长手填 durationInFrames",
  "竖屏由横屏内容重排后靠上摆",
];
const AFTER_ITEMS = [
  "hold 从字数长出来，人和 agent 都不会填错",
  "加一行字，片子自己变长",
  "9:16 是原生版式，不是适配",
];

// --- Timing ---
const F_BEFORE = 6;
const F_ARROW = 24;
const F_AFTER = F_BEFORE + PHASE_F; // 6 + 18 = 24 (causal phase)

// Longest text: 13 hanzi (竖屏由横屏内容重排后靠上摆 or hold 从字数长出来...都不会填错)
const LAST_ENTRANCE_END =
  F_AFTER + 5 + (AFTER_ITEMS.length - 1) * ROW_STEP_F + 8; // f24+5+14+8 = f51
const HOLD = holdFrames(13); // max(26, 98) = 98
export const ACT3_FRAMES = LAST_ENTRANCE_END + HOLD; // 149

// Shared panel content renderer
const PanelContent: React.FC<{
  frame: number;
  fps: number;
  f0: number;
  label: string;
  items: string[];
  mark: string;
  markColor: string;
  dimmed?: boolean;
  emphasized?: boolean;
  labelColor: string;
  textColor: string;
}> = ({
  frame,
  fps,
  f0,
  label,
  items,
  mark,
  markColor,
  dimmed,
  emphasized,
  labelColor,
  textColor,
}) => {
  return (
    <div style={{ flex: 1, display: "flex", ...panelEntrance(frame, f0, fps) }}>
      <Surface
        emphasized={emphasized}
        dimmed={dimmed}
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 26,
        }}
      >
        <span className="k-label" style={{ color: labelColor }}>
          {label}
        </span>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          {items.map((text, i) => {
            const rowF = f0 + 5 + i * ROW_STEP_F;
            return (
              <div
                key={text}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 14,
                  ...textEntrance(frame, rowF),
                }}
              >
                <span style={{ color: markColor, fontSize: 30, lineHeight: 1 }}>
                  {mark}
                </span>
                <span className="k-body" style={{ color: textColor }}>
                  {text}
                </span>
              </div>
            );
          })}
        </div>
      </Surface>
    </div>
  );
};

export const Act3Compare: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <Stage>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "stretch",
          gap: 40,
        }}
      >
        {/* BEFORE panel */}
        <PanelContent
          frame={frame}
          fps={fps}
          f0={F_BEFORE}
          label="Before"
          items={BEFORE_ITEMS}
          mark={"✗"} // ✗
          markColor="var(--negative)"
          dimmed
          labelColor="var(--negative)"
          textColor="var(--ink-muted)"
        />

        {/* Arrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            ...popEntrance(frame, F_ARROW, fps),
          }}
        >
          <span
            style={{
              color: "var(--ink-faint)",
              fontSize: 46,
              lineHeight: 1,
            }}
          >
            {"→"} {/* → */}
          </span>
        </div>

        {/* AFTER panel */}
        <PanelContent
          frame={frame}
          fps={fps}
          f0={F_AFTER}
          label="After"
          items={AFTER_ITEMS}
          mark={"✓"} // ✓
          markColor="var(--positive)"
          emphasized
          labelColor="var(--accent)"
          textColor="var(--ink)"
        />
      </div>
    </Stage>
  );
};
