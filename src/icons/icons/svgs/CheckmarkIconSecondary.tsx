import * as React from 'react';
import { SVGProps } from 'react';

function SvgCheckmarkIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Checkmark Icon</title>
      <path
        d="M6.56 16C6.21 16 5.9 15.75 5.83 15.4C5.79 15.21 4.85 10.81 0.600001 9.93C0.190001 9.84 -0.069999 9.44 0.020001 9.04C0.100001 8.63 0.500001 8.37 0.900001 8.46C3.78 9.06 5.41 10.94 6.3 12.55C7.15 9.13 9.36 3.26 14.88 0.0999961C15.24 -0.110004 15.7 0.019996 15.9 0.379996C16.11 0.739996 15.98 1.2 15.62 1.4C8.38 5.54 7.32 15.23 7.31 15.32C7.27 15.69 6.97 15.98 6.6 16C6.59 16 6.58 16 6.56 16Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCheckmarkIconSecondary;
