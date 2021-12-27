import * as React from 'react';
import { SVGProps } from 'react';

function SvgTemperatureIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Temperature Icon</title>
      <path
        d="M13.51 0C12.13 0 11.01 1.12 11.01 2.5C11.01 3.88 12.13 5 13.51 5C14.89 5 16.01 3.88 16.01 2.5C16.01 1.12 14.89 0 13.51 0ZM13.51 3.5C12.96 3.5 12.51 3.05 12.51 2.5C12.51 1.95 12.96 1.5 13.51 1.5C14.06 1.5 14.51 1.95 14.51 2.5C14.51 3.05 14.06 3.5 13.51 3.5Z"
        fill="currentColor"
      />
      <path
        d="M7.25 3.25C7.66 3.25 8 2.91 8 2.5C8 2.09 7.66 1.75 7.25 1.75H0.75C0.34 1.75 0 2.09 0 2.5C0 2.53 0.02 2.56 0.02 2.6V8.78C0.02 8.81 0 8.83 0 8.87C0 8.91 0.02 8.93 0.02 8.97V15.24C0.02 15.65 0.36 15.99 0.77 15.99C1.18 15.99 1.52 15.65 1.52 15.24V9.62H7.25C7.66 9.62 8 9.28 8 8.87C8 8.46 7.66 8.12 7.25 8.12H1.52V3.25H7.25Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTemperatureIconSecondary;
