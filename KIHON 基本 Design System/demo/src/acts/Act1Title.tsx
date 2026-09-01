// Act 1 — Title: left text + right spec card.
// Layout reference: TitleFrame.jsx

import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { Stage } from "../components/Stage";
import { Surface } from "../components/Surface";
import { Rule } from "../components/Rule";
import {
  textEntrance,
  panelEntrance,
  ruleEntrance,
  holdFrames,
  ROW_STEP_F,
} from "../animations";

// --- Timing ---
const F_DISPLAY = 4;
const F_SUBTITLE = 12;
const F_PANEL = 16;
const F_RULE = 20;
const F_ROW_START = 22;
const ROWS: [string, string][] = [
  ["fade", "8f"],
  ["stagger", "8f"],
  ["phase", "18f"],
  ["hold", "26f +"],
];
// Longest text: subtitle 18 hanzi
const LAST_ENTRANCE_END = F_ROW_START + (ROWS.length - 1) * ROW_STEP_F + 8; // f51
const HOLD = holdFrames(18); // max(26, 135) = 135
export const ACT1_FRAMES = LAST_ENTRANCE_END + HOLD; // 186

export const Act1Title: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <Stage>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          gap: 56,
        }}
      >
        {/* Left: text column */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 30,
          }}
        >
          <p className="k-display" style={textEntrance(frame, F_DISPLAY)}>
            让时长从内容长出来
          </p>
          <p
            className="k-subtitle"
            style={{
              ...textEntrance(frame, F_SUBTITLE),
              color: "var(--ink-muted)",
            }}
          >
            阅读预算 hold = max(26, 汉字数 × 7.5)
            帧——加一行字，片子自己变长。
          </p>
        </div>

        {/* Right: spec card */}
        <div
          style={{
            flex: "0 0 430px",
            ...panelEntrance(frame, F_PANEL, fps),
          }}
        >
          <Surface
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <span className="k-label">Spec</span>
            <div style={ruleEntrance(frame, F_RULE)}>
              <Rule />
            </div>
            {ROWS.map(([key, value], i) => {
              const rowF = F_ROW_START + i * ROW_STEP_F;
              return (
                <div
                  key={key}
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 14,
                    ...textEntrance(frame, rowF),
                  }}
                >
                  <span className="k-data-tick" style={{ flex: 1 }}>
                    {key}
                  </span>
                  <span
                    className="k-data-tick"
                    style={{ color: "var(--accent)" }}
                  >
                    {value}
                  </span>
                </div>
              );
            })}
          </Surface>
        </div>
      </div>
    </Stage>
  );
};
