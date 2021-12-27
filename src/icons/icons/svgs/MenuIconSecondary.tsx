import * as React from 'react';
import { SVGProps } from 'react';

function SvgMenuIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Menu Icon</title>
      <path
        d="M7.25 13H0.75C0.34 13 0 13.34 0 13.75C0 14.16 0.34 14.5 0.75 14.5H7.25C7.66 14.5 8 14.16 8 13.75C8 13.34 7.66 13 7.25 13Z"
        fill="currentColor"
      />
      <path
        d="M15.25 8H0.75C0.34 8 0 8.34 0 8.75C0 9.16 0.34 9.5 0.75 9.5H15.25C15.66 9.5 16 9.16 16 8.75C16 8.34 15.66 8 15.25 8Z"
        fill="currentColor"
      />
      <path
        d="M0.75 4.5H15.25C15.66 4.5 16 4.16 16 3.75C16 3.34 15.66 3 15.25 3H0.75C0.34 3 0 3.34 0 3.75C0 4.16 0.34 4.5 0.75 4.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMenuIconSecondary;
