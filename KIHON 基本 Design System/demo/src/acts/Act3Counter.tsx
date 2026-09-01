// Act 3 — Counter: Arc ring + counter numeral (the 5th motion role, previously undemonstrated).

import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { Stage } from "../components/Stage";
import { barGrowth, counterValue, textEntrance, holdFrames } from "../animations";

// --- Geometry ---
const ARC_SIZE = 420;
const STROKE_W = 20;
const R = (ARC_SIZE - STROKE_W) / 2; // 200
const C = 2 * Math.PI * R; // ~1256.64

// --- Timing ---
const F_ARC = 8;
const F_COUNTER = 8; // same phase as arc
const F_CAPTION = 16; // stagger +8
// Caption: 多数模板在总长70%前完成最后一次可见运动 = 18 hanzi
const LAST_ENTRANCE_END = F_COUNTER + 24; // f32
const HOLD = holdFrames(18); // max(26, 135) = 135
export const ACT3_FRAMES = LAST_ENTRANCE_END + HOLD; // 167

interface Act3CounterProps {
  format?: "landscape" | "portrait";
  theme?: "gin" | "kuro";
}

export const Act3Counter: React.FC<Act3CounterProps> = ({
  format = "landscape",
  theme = "gin",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const arcProgress = barGrowth(frame, F_ARC, fps); // pop spring
  const dashOffset = C * (1 - arcProgress * 0.7);
  const displayNum = counterValue(frame, F_COUNTER, 70);

  const isPortrait = format === "portrait";

  return (
    <Stage format={format} theme={theme}>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: isPortrait ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          gap: isPortrait ? 40 : 72,
        }}
      >
        {/* Arc + center number */}
        <div style={{ position: "relative", width: ARC_SIZE, height: ARC_SIZE, flexShrink: 0 }}>
          <svg
            width={ARC_SIZE}
            height={ARC_SIZE}
            viewBox={`0 0 ${ARC_SIZE} ${ARC_SIZE}`}
            style={{ display: "block" }}
          >
            {/* Track circle */}
            <circle
              cx={ARC_SIZE / 2}
              cy={ARC_SIZE / 2}
              r={R}
              fill="none"
              stroke="var(--line)"
              strokeWidth={STROKE_W}
            />
            {/* Value arc — ramp-3 */}
            <circle
              cx={ARC_SIZE / 2}
              cy={ARC_SIZE / 2}
              r={R}
              fill="none"
              stroke="var(--ramp-3)"
              strokeWidth={STROKE_W}
              strokeDasharray={C}
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
              transform={`rotate(-90 ${ARC_SIZE / 2} ${ARC_SIZE / 2})`}
            />
          </svg>
          {/* Center number (counter role — no fade, digits settle) */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ display: "inline-flex", alignItems: "baseline", gap: "0.18em" }}>
              <span className="k-data-value">{displayNum}</span>
              <span className="k-data-tick">%</span>
            </span>
          </div>
        </div>

        {/* Caption */}
        <p
          className="k-caption"
          style={{
            ...textEntrance(frame, F_CAPTION),
            color: "var(--ink-muted)",
            maxWidth: isPortrait ? undefined : 400,
          }}
        >
          {isPortrait ? (
            "多数模板在总长 70% 前完成最后一次可见运动"
          ) : (
            <>多数模板在总长 70% 前<br />完成最后一次可见运动</>
          )}
        </p>
      </div>
    </Stage>
  );
};
