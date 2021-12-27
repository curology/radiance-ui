import * as React from 'react';
import { SVGProps } from 'react';

function SvgChevronIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Chevron Icon</title>
      <path
        d="M11.7127 7.29999L5.21271 2.15999C4.89271 1.89999 4.41271 1.95999 4.16271 2.27999C3.90271 2.60999 3.96271 3.07999 4.28271 3.32999L10.0627 7.89999L4.41271 12.67C4.09271 12.94 4.05271 13.41 4.32271 13.73C4.48271 13.91 4.69271 14 4.90271 14C5.07271 14 5.24271 13.94 5.38271 13.82L11.7327 8.45999C11.9127 8.31999 12.0027 8.09999 12.0027 7.87999C12.0027 7.64999 11.8927 7.43999 11.7127 7.29999Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgChevronIconSecondary;
