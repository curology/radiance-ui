import * as React from 'react';
import { SVGProps } from 'react';

function SvgTimerIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Timer Icon</title>
      <path
        d="M8.48 3.22C8.48 3.19 8.5 3.16 8.5 3.13V2.5H9C9.41 2.5 9.75 2.16 9.75 1.75C9.75 1.34 9.41 1 9 1H6.5C6.09 1 5.75 1.34 5.75 1.75C5.75 2.16 6.09 2.5 6.5 2.5H7V3.14C7 3.17 7.01 3.2 7.02 3.22C4.19 3.59 2 6 2 8.92C2 12.09 4.58 14.67 7.75 14.67C10.92 14.67 13.5 12.09 13.5 8.92C13.5 6 11.31 3.59 8.48 3.22ZM7.75 13.17C5.41 13.17 3.5 11.26 3.5 8.92C3.5 6.58 5.41 4.67 7.75 4.67C10.09 4.67 12 6.58 12 8.92C12 11.26 10.09 13.17 7.75 13.17Z"
        fill="currentColor"
      />
      <path
        d="M10.09 8.17H8.5V6.58C8.5 6.17 8.16 5.83 7.75 5.83C7.34 5.83 7 6.17 7 6.58V8.92C7 9.33 7.34 9.67 7.75 9.67H10.09C10.5 9.67 10.84 9.33 10.84 8.92C10.84 8.51 10.5 8.17 10.09 8.17Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTimerIconSecondary;
