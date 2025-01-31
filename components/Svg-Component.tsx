import * as React from "react";
import Svg, { Mask, Rect, G, Path } from "react-native-svg";
export const SVGComponent = (props) => (
  <Svg
    width={115}
    height={135}
    viewBox="0 0 115 135"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Mask
      id="mask0_518_726"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={115}
      height={135}
    >
      <Rect x={0.140137} width={114.86} height={135} rx={10} fill="#E8F3F1" />
    </Mask>
    <G mask="url(#mask0_518_726)">
      <Path
        opacity={0.5}
        d="M103.152 77.5C103.152 104.181 82.7332 125 58.5191 125C34.3049 125 13.8862 104.181 13.8862 77.5C13.8862 50.8191 34.3049 30 58.5191 30C82.7332 30 103.152 50.8191 103.152 77.5Z"
        stroke="white"
        strokeWidth={18}
      />
    </G>
  </Svg>
);

