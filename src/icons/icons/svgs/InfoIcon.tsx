import * as React from 'react';
import { SVGProps } from 'react';

function SvgInfoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Info Icon</title>
      <path
        d="M7.52 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM8.55 14.73V4.74L6 4.73v1.25h1.3v8.75H6v1.25h3.85v-1.25h-1.3Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgInfoIcon;
