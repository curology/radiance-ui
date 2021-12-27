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
      <title>Checkmark Icon</title>
      <path
        d="M14.96 2L5.26 11.42L0.88 7.1L0 7.99L5.26 13.17L15.83 2.9L14.96 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCheckmarkIcon;
