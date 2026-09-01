// Act 2 Portrait — Data: vertical stack, horizontal bars.
// Layout reference: DataFrameP.jsx

import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { Stage } from "../../components/Stage";
import { Rule } from "../../components/Rule";
import { textEntrance, ruleEntrance, barGrowth, holdFrames, STAGGER_F } from "../../animations";

const F_TITLE = 0;
const F_BODY = 8;
const F_CAPTION = 40;
const F_RULE = 11;
const BARS = [
  { label: "f32–35", value: 3 },
  { label: "f51–57", value: 6 },
  { label: "f60–66", value: 5 },
  { label: "f71–82", value: 4 },
] as const;
const BAR_MAX = 6;
const RAMP = ["var(--ramp-1)","var(--ramp-2)","var(--ramp-3)","var(--ramp-4)"];
const CAPS = ["var(--bar-cap-right-1)","var(--bar-cap-right-2)","var(--bar-cap-right-3)","var(--bar-cap-right-4)"];

const LAST_ENTRANCE_END = 55;
const HOLD = holdFrames(34);
export const ACT2P_FRAMES = LAST_ENTRANCE_END + HOLD; // 310

export const Act2DataP: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <Stage format="portrait" theme="kuro">
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 40 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <p className="k-title" style={textEntrance(frame, F_TITLE)}>
            静帧是设计的<br/>一部分
          </p>
          <p className="k-body" style={{ ...textEntrance(frame, F_BODY), color: "var(--ink-muted)" }}>
            对 20 个模板逐帧算画面变化量：多数片子在 40%–70% 处就停了，剩下的 1–2 秒是留给人读完的时间。
          </p>
        </div>
        {/* Horizontal bars */}
        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          {BARS.map((bar, i) => {
            const barF = F_RULE + i * STAGGER_F;
            const valF = barF + 8;
            const growth = barGrowth(frame, barF, fps);
            const widthPct = (bar.value / BAR_MAX) * 82 * growth;
            return (
              <div key={bar.label} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <span className="k-data-tick" style={textEntrance(frame, barF)}>{bar.label}</span>
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{ width: `${widthPct}%`, height: 32, backgroundColor: RAMP[i], boxShadow: CAPS[i], borderRadius: "0 2px 2px 0" }} />
                  <span className="k-data-tick" style={{ ...textEntrance(frame, valF), color: "var(--ink)" }}>{bar.value}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div style={ruleEntrance(frame, F_RULE)}><Rule tone="strong" /></div>
        <p className="k-caption" style={{ ...textEntrance(frame, F_CAPTION), color: "var(--ink-faint)" }}>
          最后一次可见运动的帧号 · 总长 90 帧
        </p>
      </div>
    </Stage>
  );
};
