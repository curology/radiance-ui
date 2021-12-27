import * as React from 'react';
import { SVGProps } from 'react';

function SvgPaymentIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Payment Icon</title>
      <path
        d="M14.8 2H0.75C0.34 2 0 2.34 0 2.75V5.04C0 5.7 0.54 6.24 1.2 6.24H12.82C13.23 6.24 13.57 5.9 13.57 5.49C13.57 5.08 13.23 4.74 12.82 4.74H1.5V3.5H14.5V12.44H1.5V7.79C1.5 7.38 1.16 7.04 0.75 7.04C0.34 7.04 0 7.38 0 7.79V12.74C0 13.4 0.54 13.94 1.2 13.94H14.8C15.46 13.94 16 13.4 16 12.74V3.2C16 2.54 15.46 2 14.8 2Z"
        fill="currentColor"
      />
      <path
        d="M6.65 10.52C7.06 10.52 7.4 10.18 7.4 9.77V7.77C7.4 7.36 7.06 7.02 6.65 7.02H3.75C3.34 7.02 3 7.36 3 7.77V9.76C3 10.17 3.34 10.51 3.75 10.51H6.65V10.52ZM4.5 8.52H5.9V9.01H4.5V8.52Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPaymentIconSecondary;
