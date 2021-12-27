import * as React from 'react';
import { SVGProps } from 'react';

function SvgEditIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Edit Icon</title>
      <path
        d="M12.81 12.46C12.93 12.58 13.1 12.66 13.27 12.68L15.02 12.84C15.04 12.84 15.07 12.84 15.09 12.84C15.29 12.84 15.48 12.76 15.62 12.62C15.78 12.46 15.86 12.24 15.84 12.02L15.68 10.27C15.66 10.1 15.59 9.93 15.46 9.81L5.87 0.220001C5.58 -0.0699995 5.1 -0.0699995 4.81 0.220001L3.23 1.8C2.94 2.09 2.94 2.57 3.23 2.86L12.81 12.46ZM13.05 9.52L12.53 10.05L6.59 4.11L7.11 3.59L13.05 9.52ZM13.68 11.2L13.58 11.1L14.1 10.57L14.2 10.67L14.25 11.25L13.68 11.2ZM5.34 1.81L6.05 2.52L5.53 3.05L4.82 2.33L5.34 1.81Z"
        fill="currentColor"
      />
      <path
        d="M15.24 14.49H0.75C0.34 14.49 0 14.83 0 15.24C0 15.65 0.34 15.99 0.75 15.99H15.24C15.65 15.99 15.99 15.65 15.99 15.24C15.99 14.83 15.65 14.49 15.24 14.49Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgEditIconSecondary;
