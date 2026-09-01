import React from "react";
import { Composition } from "remotion";
import { KihonDemo, TOTAL_FRAMES } from "./KihonDemo";
import { KihonDemoPortrait, TOTAL_PORTRAIT_FRAMES } from "./KihonDemoPortrait";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="KihonDemo"
        component={KihonDemo}
        durationInFrames={TOTAL_FRAMES}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="KihonDemoPortrait"
        component={KihonDemoPortrait}
        durationInFrames={TOTAL_PORTRAIT_FRAMES}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
