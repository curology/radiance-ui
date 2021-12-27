import * as React from 'react';
import { SVGProps } from 'react';

function SvgSmileIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Smile Icon</title>
      <path
        d="M11.03 9.15999C10.64 9.02999 10.21 9.23999 10.08 9.62999C9.68 10.83 8.68 11.24 7.88 11.2C7.15 11.18 6.21 10.76 5.92 9.66999C5.82 9.26999 5.4 9.02999 5 9.13999C4.6 9.24999 4.36 9.65999 4.47 10.06C4.88 11.61 6.2 12.65 7.83 12.7C7.87 12.7 7.92 12.7 7.96 12.7C9.59 12.7 10.97 11.69 11.5 10.1C11.64 9.71999 11.43 9.28999 11.03 9.15999Z"
        fill="currentColor"
      />
      <path
        d="M8 -7.62939e-06C3.59 -7.62939e-06 0 3.58999 0 7.99999C0 12.41 3.59 16 8 16C12.41 16 16 12.41 16 7.99999C16 3.58999 12.41 -7.62939e-06 8 -7.62939e-06ZM8 14.5C4.42 14.5 1.5 11.58 1.5 7.99999C1.5 4.41999 4.42 1.49999 8 1.49999C11.58 1.49999 14.5 4.41999 14.5 7.99999C14.5 11.58 11.58 14.5 8 14.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSmileIconSecondary;
