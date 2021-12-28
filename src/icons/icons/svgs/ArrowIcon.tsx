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
      <path
        d="M27.07 30.75a4.63 4.63 0 0 1-7.85 0L0 0h46.27Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgArrowIcon;
