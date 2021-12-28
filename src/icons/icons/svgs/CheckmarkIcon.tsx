import * as React from 'react';
import { SVGProps } from 'react';

function SvgCheckmarkIcon(props: SVGProps<SVGSVGElement>) {
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
        d="m14.96 2-9.7 9.42L.88 7.1 0 7.99l5.26 5.18L15.83 2.9l-.87-.9Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCheckmarkIcon;
