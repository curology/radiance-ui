import * as React from 'react';
import { SVGProps } from 'react';

function SvgStarIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Star Icon</title>
      <path
        d="M15.25 7.25H9.81L13.66 3.4C13.95 3.11 13.95 2.63 13.66 2.34C13.37 2.05 12.89 2.05 12.6 2.34L8.75 6.19V0.75C8.75 0.34 8.41 0 8 0C7.59 0 7.25 0.34 7.25 0.75V6.19L3.4 2.34C3.11 2.05 2.63 2.05 2.34 2.34C2.05 2.63 2.05 3.11 2.34 3.4L6.19 7.25H0.75C0.34 7.25 0 7.59 0 8C0 8.41 0.34 8.75 0.75 8.75H6.19L2.34 12.6C2.05 12.89 2.05 13.37 2.34 13.66C2.49 13.81 2.68 13.88 2.87 13.88C3.06 13.88 3.25 13.81 3.4 13.66L7.25 9.81V15.25C7.25 15.66 7.59 16 8 16C8.41 16 8.75 15.66 8.75 15.25V9.81L12.6 13.66C12.75 13.81 12.94 13.88 13.13 13.88C13.32 13.88 13.51 13.81 13.66 13.66C13.95 13.37 13.95 12.89 13.66 12.6L9.81 8.75H15.25C15.66 8.75 16 8.41 16 8C16 7.59 15.66 7.25 15.25 7.25Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgStarIconSecondary;
