import * as React from 'react';
import { SVGProps } from 'react';

function SvgLocationIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Location Icon</title>
      <path
        d="M7.89 0C5.1 0 3 2.18 3 5.08C3 6.69 3.95 8.69 4.79 10.45C4.93 10.75 5.07 11.04 5.2 11.32L7.22 15.57C7.34 15.84 7.61 16 7.89 16C8 16 8.11 15.98 8.21 15.93C8.58 15.75 8.74 15.31 8.57 14.93L6.56 10.69C6.43 10.41 6.29 10.12 6.15 9.81C5.41 8.27 4.5 6.35 4.5 5.08C4.5 3 5.93 1.5 7.89 1.5C9.92 1.5 11.28 2.92 11.28 5.04C11.28 6.69 10.37 8.52 9.56 10.13L8.71 11.9C8.53 12.27 8.69 12.72 9.06 12.9C9.43 13.08 9.88 12.92 10.06 12.55L10.91 10.8C11.75 9.13 12.79 7.05 12.79 5.04C12.78 2.07 10.77 0 7.89 0Z"
        fill="currentColor"
      />
      <path
        d="M9.86 5.17C9.86 4.08 8.98 3.2 7.89 3.2C6.8 3.2 5.92 4.09 5.92 5.17C5.92 6.25 6.8 7.14 7.89 7.14C8.98 7.14 9.86 6.26 9.86 5.17ZM7.89 5.64C7.63 5.64 7.42 5.43 7.42 5.17C7.42 4.91 7.63 4.7 7.89 4.7C8.15 4.7 8.36 4.91 8.36 5.17C8.36 5.43 8.15 5.64 7.89 5.64Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLocationIconSecondary;
