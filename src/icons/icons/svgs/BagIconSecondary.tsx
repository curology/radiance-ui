import * as React from 'react';
import { SVGProps } from 'react';

function SvgBagIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Bag Icon</title>
      <path
        d="M11.65 16H4.35C1.95 16 0 14.04 0 11.64V5.67C0 5.26 0.34 4.92 0.75 4.92H9.86V3.92C9.86 1.75 8.8 1.5 8 1.5C7.6 1.5 6.39 1.5 6.17 3.28C6.12 3.7 5.75 3.99 5.34 3.94C4.93 3.89 4.63 3.51 4.69 3.1C4.92 1.16 6.16 0 8 0C10.13 0 11.36 1.43 11.36 3.93L11.37 5.68C11.37 5.88 11.29 6.07 11.15 6.21C11 6.35 10.84 6.41 10.61 6.43L9.67 6.42H1.5V11.64C1.5 13.22 2.78 14.5 4.35 14.5H11.64C13.21 14.5 14.49 13.22 14.49 11.64V6.42H13.49C13.08 6.42 12.74 6.08 12.74 5.67C12.74 5.26 13.08 4.92 13.49 4.92H15.24C15.65 4.92 15.99 5.26 15.99 5.67V11.64C16 14.04 14.05 16 11.65 16Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBagIconSecondary;
