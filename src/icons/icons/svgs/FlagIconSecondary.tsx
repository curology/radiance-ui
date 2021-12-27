import * as React from 'react';
import { SVGProps } from 'react';

function SvgFlagIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Flag Icon</title>
      <path
        d="M0.75 16C0.34 16 0 15.66 0 15.25V0.75C0 0.34 0.34 0 0.75 0H15.25C15.55 0 15.83 0.18 15.94 0.46C16.05 0.74 15.99 1.06 15.78 1.28L11.49 5.57L15.78 9.86C15.99 10.07 16.06 10.4 15.94 10.68C15.82 10.96 15.55 11.14 15.25 11.14H3.7C3.29 11.14 2.95 10.8 2.95 10.39C2.95 9.98 3.29 9.65 3.7 9.65H13.44L9.9 6.1C9.6 5.81 9.6 5.34 9.9 5.04L13.44 1.5H1.5V15.25C1.5 15.66 1.16 16 0.75 16Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFlagIconSecondary;
