import * as React from 'react';
import { SVGProps } from 'react';

function SvgStarFilledIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Star Filled Icon</title>
      <path
        d="M8.01001 0.0700684L5.54001 5.08007L0.0100098 5.88007L4.01001 9.78007L3.07001 15.2901L8.01001 12.6901L12.95 15.2901L12.01 9.78007L16.01 5.88007L10.48 5.08007L8.01001 0.0700684Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgStarFilledIcon;
