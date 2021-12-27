import * as React from 'react';
import { SVGProps } from 'react';

function SvgPlayIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Play Icon</title>
      <path
        d="M1.75247 16C1.61247 16 1.48247 15.96 1.36247 15.89C1.13247 15.75 1.00247 15.51 1.00247 15.25V4.00002C1.00247 3.59002 1.34247 3.25002 1.75247 3.25002C2.16247 3.25002 2.50247 3.59002 2.50247 4.00002V14.04L14.5725 8.00002L1.41247 1.42002C1.04247 1.23002 0.892465 0.780022 1.08247 0.410022C1.26247 0.040022 1.72247 -0.099978 2.09247 0.080022L16.5925 7.33002C16.8425 7.46002 17.0025 7.72002 17.0025 8.00002C17.0025 8.28002 16.8425 8.54002 16.5925 8.67002L2.09247 15.92C1.98247 15.97 1.86247 16 1.75247 16Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPlayIconSecondary;
