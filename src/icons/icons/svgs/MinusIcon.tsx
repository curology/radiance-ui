import * as React from 'react';
import { SVGProps } from 'react';

function SvgMinusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M16.01 7.42h-16v1.25h16V7.42Z" fill="currentColor" />
    </svg>
  );
}

export default SvgMinusIcon;
