import * as React from 'react';
import { SVGProps } from 'react';

function SvgCircleMinusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Circle Minus Icon</title>
      <circle cx={8} cy={8} r={7.4} stroke="currentColor" strokeWidth={1.2} />
      <rect x={4} y={7.3501} width={8} height={1.2} fill="currentColor" />
    </svg>
  );
}

export default SvgCircleMinusIcon;
