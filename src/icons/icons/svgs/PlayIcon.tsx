import * as React from 'react';
import { SVGProps } from 'react';

function SvgPlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Play Icon</title>
      <path
        d="M2 16.04L13.25 8.34003L2 0.0300293V16.04ZM3.25 2.51003L11.1 8.31003L3.25 13.68V2.51003Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPlayIcon;
