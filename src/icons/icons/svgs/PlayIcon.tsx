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
      <path
        d="m2 16.04 11.25-7.7L2 .03v16.01ZM3.25 2.51l7.85 5.8-7.85 5.37V2.51Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPlayIcon;
