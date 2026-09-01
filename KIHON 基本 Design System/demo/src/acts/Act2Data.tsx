// Act 2 — Data: left 40% text + right bar chart.
// Layout reference: DataFrame.jsx

import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { Stage } from "../components/Stage";
import { Rule } from "../components/Rule";
import {
  textEntrance,
  ruleEntrance,
  barGrowth,
  holdFrames,
  STAGGER_F,
} from "../animations";

// --- Timing ---
const F_TITLE = 0;
const F_BODY = 8;
const F_CAPTION = 40;
const F_RULE = 11;

// Bar data: [label, value (max 6)]
const BARS = [
  { label: "f32–35", value: 3 },
  { label: "f51–57", value: 6 },
  { label: "f60–66", value: 5 },
  { label: "f71–82", value: 4 },
] as const;
const BAR_MAX = 6;

// Ramp colors and bar caps per step
const RAMP_COLORS = [
  "var(--ramp-1)",
  "var(--ramp-2)",
  "var(--ramp-3)",
  "var(--ramp-4)",
];
const BAR_CAPS = [
  "var(--bar-cap-up-1)",
  "var(--bar-cap-up-2)",
  "var(--bar-cap-up-3)",
  "var(--bar-cap-up-4)",
];

// Longest text: body 34 hanzi
const LAST_ENTRANCE_END = 55; // last bar spring settles ~f55
const HOLD = holdFrames(34); // max(26, 255) = 255
export const ACT2_FRAMES = LAST_ENTRANCE_END + HOLD; // 310

export const Act2Data: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <Stage>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "stretch",
          gap: 72,
        }}
      >
        {/* Left 40%: text */}
        <div
          style={{
            flex: "0 0 40%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 22,
          }}
        >
          <p className="k-title" style={textEntrance(frame, F_TITLE)}>
            静帧是设计的
            <br />
            一部分
          </p>
          <p
            className="k-body"
            style={{
              ...textEntrance(frame, F_BODY),
              color: "var(--ink-muted)",
            }}
          >
            对 20 个模板逐帧算画面变化量：多数片子在 40%–70%
            处就停了，剩下的 1–2 秒是留给人读完的时间。
          </p>
          <p
            className="k-caption"
            style={{
              ...textEntrance(frame, F_CAPTION),
              color: "var(--ink-faint)",
            }}
          >
            最后一次可见运动的帧号 · 总长 90 帧
          </p>
        </div>

        {/* Right: bar chart */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {/* Bars area */}
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "flex-end",
              gap: 34,
            }}
          >
            {BARS.map((bar, i) => {
              const barStartF = F_RULE + i * STAGGER_F; // f11, f19, f27, f35
              const valueStartF = barStartF + 8; // f19, f27, f35, f43
              const growth = barGrowth(frame, barStartF, fps);
              const heightPct = (bar.value / BAR_MAX) * 100 * growth;

              return (
                <div
                  key={bar.label}
                  style={{
                    flex: 1,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: 14,
                  }}
                >
                  {/* Value above bar */}
                  <span
                    className="k-data-tick"
                    style={{
                      ...textEntrance(frame, valueStartF),
                      color: "var(--ink)",
                    }}
                  >
                    {bar.value}
                  </span>
                  {/* Bar — height driven by spring, no scaleY, no fade */}
                  <div
                    style={{
                      width: "100%",
                      height: `${heightPct}%`,
                      backgroundColor: RAMP_COLORS[i],
                      boxShadow: BAR_CAPS[i],
                      borderRadius: "2px 2px 0 0",
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Axis rule (strong) */}
          <div style={ruleEntrance(frame, F_RULE)}>
            <Rule tone="strong" />
          </div>

          {/* Axis ticks */}
          <div style={{ display: "flex", gap: 34 }}>
            {BARS.map((bar, i) => {
              const tickF = F_RULE + i * STAGGER_F;
              return (
                <div
                  key={`tick-${bar.label}`}
                  style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    ...textEntrance(frame, tickF),
                  }}
                >
                  <span
                    style={{
                      width: 1,
                      height: 5,
                      backgroundColor: "var(--line)",
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Axis labels */}
          <div style={{ display: "flex", gap: 34 }}>
            {BARS.map((bar, i) => {
              const labelF = F_RULE + i * STAGGER_F;
              return (
                <div
                  key={`label-${bar.label}`}
                  style={{
                    flex: 1,
                    textAlign: "center",
                    ...textEntrance(frame, labelF),
                  }}
                >
                  <span className="k-data-tick">{bar.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Stage>
  );
};
