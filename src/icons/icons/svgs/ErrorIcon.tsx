import * as React from 'react';
import { SVGProps } from 'react';

function SvgErrorIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Error Icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.6 6.79a6.747 6.747 0 0 0-7.9-5.36 6.7 6.7 0 0 0-4.31 2.84 6.71 6.71 0 0 0-1.04 5.06 6.747 6.747 0 0 0 7.9 5.36 6.7 6.7 0 0 0 4.31-2.84 6.71 6.71 0 0 0 1.04-5.06ZM6.46.2C6.97.11 7.48.06 7.98.06a7.996 7.996 0 0 1 1.5 15.85c-.51.09-1.02.14-1.52.14-3.76 0-7.12-2.66-7.85-6.49A7.996 7.996 0 0 1 6.46.2Zm.86 3.91h1.41v5.26H7.32V4.11Zm-.17 6.83c0-.48.39-.84.88-.84s.88.36.88.84c0 .49-.39.86-.88.86s-.88-.37-.88-.86Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgErrorIcon;
