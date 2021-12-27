import * as React from 'react';
import { SVGProps } from 'react';

function SvgCloudIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Cloud Icon</title>
      <path
        d="M14.58 5.6C13.63 4.87 12.33 4.63 11.09 4.96C10.69 5.07 10.45 5.48 10.55 5.88C10.66 6.28 11.07 6.52 11.47 6.42C12.26 6.21 13.09 6.35 13.67 6.8C14.21 7.22 14.5 7.88 14.5 8.7C14.5 10.34 13.27 11.36 11.29 11.36H5.13C2.75 11.36 1.5 9.64 1.5 7.93C1.5 5.88 2.84 4.5 4.83 4.5C6.84 4.5 8.2 5.98 8.67 8.65C8.74 9.06 9.13 9.33 9.54 9.26C9.95 9.19 10.22 8.8 10.15 8.39C9.55 4.97 7.61 3 4.83 3C1.98 3 0 5.03 0 7.93C0 10.74 2.2 12.86 5.13 12.86H11.29C14.55 12.86 16 10.77 16 8.7C16 7.4 15.5 6.31 14.58 5.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCloudIconSecondary;
