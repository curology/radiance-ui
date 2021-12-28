import * as React from 'react';
import { SVGProps } from 'react';

function SvgCrossIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m16.01.93-.89-.88-7.11 7.1L.91.05.02.93l7.11 7.11-7.11 7.11.89.88 7.1-7.11 7.11 7.11.89-.88L8.9 8.04 16.01.93Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCrossIcon;
