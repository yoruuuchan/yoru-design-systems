// KihonDemo — main landscape composition. Five acts laid out as hard-cut Sequences.

import React from "react";
import { Sequence } from "remotion";
import { getKihonCSS } from "./kihon-css";
import { Act1Title, ACT1_FRAMES } from "./acts/Act1Title";
import { Act2Data, ACT2_FRAMES } from "./acts/Act2Data";
import { Act3Counter, ACT3_FRAMES } from "./acts/Act3Counter";
import { Act3Compare, ACT3_FRAMES as ACT4_FRAMES } from "./acts/Act3Compare";
import { Act4End, ACT4_FRAMES as ACT5_FRAMES } from "./acts/Act4End";
import "./load-fonts";

export const TOTAL_FRAMES =
  ACT1_FRAMES + ACT2_FRAMES + ACT3_FRAMES + ACT4_FRAMES + ACT5_FRAMES;

const A2 = ACT1_FRAMES;
const A3 = A2 + ACT2_FRAMES;
const A4 = A3 + ACT3_FRAMES;
const A5 = A4 + ACT4_FRAMES;

export const KihonDemo: React.FC = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: getKihonCSS() }} />
      <Sequence from={0} durationInFrames={ACT1_FRAMES} name="Act 1 — Title">
        <Act1Title />
      </Sequence>
      <Sequence from={A2} durationInFrames={ACT2_FRAMES} name="Act 2 — Data">
        <Act2Data />
      </Sequence>
      <Sequence from={A3} durationInFrames={ACT3_FRAMES} name="Act 3 — Counter">
        <Act3Counter />
      </Sequence>
      <Sequence from={A4} durationInFrames={ACT4_FRAMES} name="Act 4 — Compare">
        <Act3Compare />
      </Sequence>
      <Sequence from={A5} durationInFrames={ACT5_FRAMES} name="Act 5 — End">
        <Act4End />
      </Sequence>
    </>
  );
};
