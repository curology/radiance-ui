import * as React from 'react';
import { SVGProps } from 'react';

function SvgCircleSolidIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Circle Solid Icon</title>
      <circle cx={8} cy={8} r={4} fill="currentColor" />
    </svg>
  );
}

export default SvgCircleSolidIconSecondary;
