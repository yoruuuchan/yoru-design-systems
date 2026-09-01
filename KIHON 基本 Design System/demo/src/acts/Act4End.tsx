// Act 4 — End card: centred vertical stack on blank metal.

import React from "react";
import { useCurrentFrame } from "remotion";
import { Stage } from "../components/Stage";
import { textEntrance } from "../animations";

// --- Timing ---
const F_WORDMARK = 4;
const F_CAPTION = 12;
const LAST_ENTRANCE_END = F_CAPTION + 8; // f20
const HOLD = 90; // explicit per spec
export const ACT4_FRAMES = LAST_ENTRANCE_END + HOLD; // 110

export const Act4End: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <Stage>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 0,
        }}
      >
        {/* Wordmark group */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
            ...textEntrance(frame, F_WORDMARK),
          }}
        >
          <span className="k-display">基本</span>
          <span
            style={{
              fontFamily:
                "'Instrument Sans', 'Source Han Sans SC', sans-serif",
              fontWeight: 600,
              fontSize: 30,
              letterSpacing: "0.14em",
              textTransform: "uppercase" as const,
              color: "var(--ink-muted)",
              margin: 0,
            }}
          >
            KIHON
          </span>
        </div>

        {/* Caption */}
        <p
          className="k-caption"
          style={{
            ...textEntrance(frame, F_CAPTION),
            color: "var(--ink-faint)",
            marginTop: 40,
          }}
        >
          为 Remotion 程序化视频而生
        </p>
      </div>
    </Stage>
  );
};
