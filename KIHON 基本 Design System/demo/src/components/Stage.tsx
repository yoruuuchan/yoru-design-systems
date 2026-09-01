// Stage — full-frame background: metal ground + grain overlay + lens falloff.
// Supports both formats (landscape/portrait) and themes (gin/kuro).

import React from "react";
import { AbsoluteFill, staticFile } from "remotion";

interface StageProps {
  children: React.ReactNode;
  format?: "landscape" | "portrait";
  theme?: "gin" | "kuro";
}

const SAFE = {
  landscape: { x: "6%", y: "9%" },
  portrait: { x: "7.5%", y: "6%" },
} as const;

export const Stage: React.FC<StageProps> = ({
  children,
  format = "landscape",
  theme = "gin",
}) => {
  const safe = SAFE[format];
  return (
    <AbsoluteFill
      data-k-theme={theme === "kuro" ? "kuro" : undefined}
      style={{
        backgroundColor: "var(--bg)",
        fontFamily: "var(--font-core)",
      }}
    >
      {/* Grain overlay — uses CSS vars so kuro overrides apply */}
      <div
        className="k-stage-grain"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${staticFile("grain.svg")})`,
          backgroundSize: "280px",
          pointerEvents: "none",
        }}
      />
      {/* Lens falloff — uses CSS var --falloff */}
      <div
        className="k-stage-falloff"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
      />
      {/* Safe area content */}
      <div
        style={{
          position: "absolute",
          left: safe.x,
          right: safe.x,
          top: safe.y,
          bottom: safe.y,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </div>
    </AbsoluteFill>
  );
};
