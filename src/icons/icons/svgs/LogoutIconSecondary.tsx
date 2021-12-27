import * as React from 'react';
import { SVGProps } from 'react';

function SvgLogoutIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Logout Icon</title>
      <path
        d="M3.74 8.75H11.25C11.66 8.75 12 8.41 12 8C12 7.59 11.66 7.25 11.25 7.25H3.9C5.12 6.26 6.13 4.79 6.13 2.75C6.13 2.34 5.79 2 5.38 2C4.97 2 4.63 2.34 4.63 2.75C4.63 6.23 0.729999 7.27 0.569999 7.31C0.239999 7.39 0.00999937 7.69 -6.28905e-07 8.02C-0.0100006 8.36 0.209999 8.66 0.529999 8.75C0.569999 8.76 4.68 10.03 4.68 13.24C4.68 13.65 5.02 13.99 5.43 13.99C5.84 13.99 6.18 13.65 6.18 13.24C6.19 11.13 4.99 9.68 3.74 8.75Z"
        fill="currentColor"
      />
      <path
        d="M14.81 0H9.36C8.94 0 8.61 0.34 8.61 0.75C8.61 1.16 8.94 1.5 9.36 1.5H14.5V14.5H9.36C8.95 14.5 8.61 14.84 8.61 15.25C8.61 15.66 8.94 16 9.36 16H14.81C15.47 16 16 15.46 16 14.8V1.2C16 0.54 15.46 0 14.81 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLogoutIconSecondary;
