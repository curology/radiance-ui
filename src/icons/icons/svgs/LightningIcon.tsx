import * as React from 'react';
import { SVGProps } from 'react';

function SvgLightningIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Lightning Icon</title>
      <path
        d="M8.87003 16.0798L7.75002 15.4998L11.62 8.07983H2.15002L6.15002 0.079834L7.28002 0.649841L4.18002 6.81985H13.69L8.87003 16.0798Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLightningIcon;
