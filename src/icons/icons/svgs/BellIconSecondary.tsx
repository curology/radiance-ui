import * as React from 'react';
import { SVGProps } from 'react';

function SvgBellIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Bell Icon</title>
      <path
        d="M15.22 12.57H14.67V6.77C14.67 6.74 14.67 6.71 14.67 6.68C14.68 3 11.67 0 7.98 0C4.33 0 1.35 2.95 1.29 6.59C1.29 6.62 1.28 6.66 1.28 6.69V12.58H0.75C0.34 12.57 0 12.91 0 13.32C0 13.73 0.34 14.07 0.75 14.07H6.02C6.05 15.13 6.92 15.98 7.98 15.98C9.04 15.98 9.91 15.13 9.94 14.07H15.22C15.63 14.07 15.97 13.73 15.97 13.32C15.97 12.91 15.64 12.57 15.22 12.57ZM7.98 14.49C7.74 14.49 7.55 14.31 7.52 14.08H8.44C8.41 14.31 8.22 14.49 7.98 14.49ZM2.79 6.78C2.79 6.75 2.8 6.72 2.8 6.69C2.8 3.83 5.13 1.5 7.99 1.5C10.83 1.5 13.14 3.78 13.18 6.61C13.18 6.64 13.18 6.66 13.18 6.69V12.58H2.79V6.78Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBellIconSecondary;
