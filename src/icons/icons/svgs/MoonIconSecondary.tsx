import * as React from 'react';
import { SVGProps } from 'react';

function SvgMoonIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Moon Icon</title>
      <path
        d="M13.43 14.19C11.17 13.47 9.49 11.58 9.03 9.26C8.95 8.86 8.55 8.6 8.14 8.68C7.74 8.76 7.47 9.15 7.55 9.56C7.95 11.58 9.1 13.33 10.73 14.5C7.27 14.35 4.5 11.49 4.5 8C4.5 4.51 7.27 1.65 10.73 1.51C9.12 2.67 7.96 4.41 7.56 6.42C7.48 6.82 7.74 7.22 8.15 7.3C8.55 7.38 8.95 7.12 9.03 6.71C9.49 4.4 11.18 2.52 13.43 1.8C13.74 1.7 13.95 1.41 13.95 1.09C13.95 0.76 13.74 0.47 13.43 0.38C12.65 0.13 11.83 0 11 0C6.59 0 3 3.59 3 8C3 12.41 6.59 16 11 16C11.83 16 12.64 15.87 13.43 15.62C13.74 15.52 13.95 15.23 13.95 14.91C13.95 14.58 13.74 14.29 13.43 14.19Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMoonIconSecondary;
