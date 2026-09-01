// Act 1 Portrait — Title: vertical stack, display at 108px, no right-side spec card.
// Layout reference: TitleFrameP.jsx

import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { Stage } from "../../components/Stage";
import { Surface } from "../../components/Surface";
import { Rule } from "../../components/Rule";
import { textEntrance, panelEntrance, ruleEntrance, holdFrames, ROW_STEP_F } from "../../animations";

const F_DISPLAY = 4;
const F_SUBTITLE = 12;
const F_PANEL = 16;
const F_RULE = 20;
const F_ROW_START = 22;
const ROWS: [string, string][] = [["fade","8f"],["stagger","8f"],["phase","18f"],["hold","26f +"]];
const LAST_ENTRANCE_END = F_ROW_START + (ROWS.length - 1) * ROW_STEP_F + 8;
const HOLD = holdFrames(18);
export const ACT1P_FRAMES = LAST_ENTRANCE_END + HOLD; // 186

export const Act1TitleP: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <Stage format="portrait" theme="kuro">
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 34 }}>
        <p className="k-display" style={{ ...textEntrance(frame, F_DISPLAY), fontSize: "calc(var(--type-display-portrait) * var(--u))" }}>
          让时长<br/>从内容<br/>长出来
        </p>
        <p className="k-subtitle" style={{ ...textEntrance(frame, F_SUBTITLE), color: "var(--ink-muted)" }}>
          阅读预算 hold = max(26, 汉字数 × 7.5) 帧——加一行字，片子自己变长。
        </p>
        <div style={{ ...panelEntrance(frame, F_PANEL, fps), marginTop: 20 }}>
          <Surface style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <span className="k-label">Spec</span>
            <div style={ruleEntrance(frame, F_RULE)}><Rule /></div>
            {ROWS.map(([k, v], i) => {
              const rowF = F_ROW_START + i * ROW_STEP_F;
              return (
                <div key={k} style={{ display: "flex", alignItems: "baseline", gap: 14, ...textEntrance(frame, rowF) }}>
                  <span className="k-data-tick" style={{ flex: 1 }}>{k}</span>
                  <span className="k-data-tick" style={{ color: "var(--accent)" }}>{v}</span>
                </div>
              );
            })}
          </Surface>
        </div>
      </div>
    </Stage>
  );
};
