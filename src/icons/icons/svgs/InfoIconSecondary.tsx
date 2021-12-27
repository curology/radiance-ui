import * as React from 'react';
import { SVGProps } from 'react';

function SvgInfoIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Info Icon</title>
      <path
        d="M8.01 3C8.84 3 9.51 2.33 9.51 1.5C9.51 0.67 8.84 0 8.01 0C7.18 0 6.51 0.67 6.51 1.5C6.51 2.33 7.18 3 8.01 3Z"
        fill="currentColor"
      />
      <path
        d="M15.25 16H0.75C0.34 16 0 15.66 0 15.25C0 14.84 0.34 14.5 0.75 14.5H15.25C15.66 14.5 16 14.84 16 15.25C16 15.66 15.66 16 15.25 16Z"
        fill="currentColor"
      />
      <path
        d="M8 7.5H0.75C0.34 7.5 0 7.16 0 6.75C0 6.34 0.34 6 0.75 6H8C8.41 6 8.75 6.34 8.75 6.75C8.75 7.16 8.41 7.5 8 7.5Z"
        fill="currentColor"
      />
      <path
        d="M8 16C7.59 16 7.25 15.66 7.25 15.25V6.75C7.25 6.34 7.59 6 8 6C8.41 6 8.75 6.34 8.75 6.75V15.25C8.75 15.66 8.41 16 8 16Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgInfoIconSecondary;
