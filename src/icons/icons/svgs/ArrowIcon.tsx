import * as React from 'react';
import { SVGProps } from 'react';

function SvgArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 46.29 32.92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Arrow</title>
      <path
        d="M27.8,39.8a4.63,4.63,0,0,1-7.85,0L.73,9.05H47Z"
        transform="translate(-0.73 -9.05)"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgArrowIcon;
