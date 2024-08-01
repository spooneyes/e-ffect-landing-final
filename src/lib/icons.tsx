import type { IconBaseProps } from "react-icons";

export type Icon = (props: IconBaseProps) => JSX.Element;

export const Logo: Icon = (props) => (
  <svg
    width="598"
    height="1147"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="598" height="1147" fill="url(#pattern0_29_3)" />
    <defs>
      <pattern
        id="pattern0_29_3"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use transform="matrix(0.00167224 0 0 0.00087184 0.120401 0.0601569)" />
      </pattern>
      <image id="image0_29_3" width="2097" height="1078" />
    </defs>
  </svg>
);
