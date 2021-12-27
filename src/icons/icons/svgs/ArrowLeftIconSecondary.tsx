import * as React from 'react';
import { SVGProps } from 'react';

function SvgArrowLeftIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Arrow - Left Icon</title>
      <path
        d="M15.25 7.21H3.75001C5.00001 6.28 6.19001 4.85 6.19001 2.75C6.19001 2.34 5.85001 2 5.44001 2C5.03001 2 4.69001 2.34 4.69001 2.75C4.69001 5.94 0.580007 7.2 0.540007 7.21C0.210007 7.3 -0.0099931 7.6 6.8958e-06 7.94C0.0100069 8.28 0.240007 8.57 0.570007 8.65C0.740007 8.69 4.64001 9.72 4.64001 13.17C4.64001 13.58 4.98001 13.92 5.39001 13.92C5.80001 13.92 6.14001 13.58 6.14001 13.17C6.14001 11.15 5.13001 9.69 3.92001 8.71H15.26C15.67 8.71 16.01 8.37 16.01 7.96C16.01 7.55 15.66 7.21 15.25 7.21Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgArrowLeftIconSecondary;
