// KihonDemoPortrait — portrait 9:16 composition, kuro theme. Five acts.

import React from "react";
import { Sequence } from "remotion";
import { getKihonCSS } from "./kihon-css";
import { Act1TitleP, ACT1P_FRAMES } from "./acts/portrait/Act1TitleP";
import { Act2DataP, ACT2P_FRAMES } from "./acts/portrait/Act2DataP";
import { Act3CounterP, ACT3_FRAMES } from "./acts/portrait/Act3CounterP";
import { Act4CompareP, ACT4P_FRAMES } from "./acts/portrait/Act4CompareP";
import { Act5EndP, ACT5P_FRAMES } from "./acts/portrait/Act5EndP";
import "./load-fonts";

export const TOTAL_PORTRAIT_FRAMES =
  ACT1P_FRAMES + ACT2P_FRAMES + ACT3_FRAMES + ACT4P_FRAMES + ACT5P_FRAMES;

const A2 = ACT1P_FRAMES;
const A3 = A2 + ACT2P_FRAMES;
const A4 = A3 + ACT3_FRAMES;
const A5 = A4 + ACT4P_FRAMES;

export const KihonDemoPortrait: React.FC = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: getKihonCSS() }} />
      <Sequence from={0} durationInFrames={ACT1P_FRAMES} name="Act 1 — Title">
        <Act1TitleP />
      </Sequence>
      <Sequence from={A2} durationInFrames={ACT2P_FRAMES} name="Act 2 — Data">
        <Act2DataP />
      </Sequence>
      <Sequence from={A3} durationInFrames={ACT3_FRAMES} name="Act 3 — Counter">
        <Act3CounterP />
      </Sequence>
      <Sequence from={A4} durationInFrames={ACT4P_FRAMES} name="Act 4 — Compare">
        <Act4CompareP />
      </Sequence>
      <Sequence from={A5} durationInFrames={ACT5P_FRAMES} name="Act 5 — End">
        <Act5EndP />
      </Sequence>
    </>
  );
};
