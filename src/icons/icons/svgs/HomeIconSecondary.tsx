import * as React from 'react';
import { SVGProps } from 'react';

function SvgHomeIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Home Icon</title>
      <path
        d="M13.02 2.94L12.9 2.84C10.37 0.72 9.52 0 8.01 0C6.56 0 5.66 0.77 3.51 2.62L3.19 2.89C1.34 4.48 0 5.62 0 7.75V15.25C0 15.66 0.34 16 0.75 16C1.16 16 1.5 15.66 1.5 15.25V7.75C1.5 6.37 2.27 5.65 4.16 4.03L4.48 3.75C6.57 1.97 7.15 1.5 8.01 1.5C8.93 1.5 9.54 1.98 11.93 3.99L12.05 4.09C14.19 5.89 14.5 6.51 14.5 7.87V15.25C14.5 15.66 14.84 16 15.25 16C15.66 16 16 15.66 16 15.25V7.87C16 5.81 15.22 4.79 13.02 2.94Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHomeIconSecondary;
