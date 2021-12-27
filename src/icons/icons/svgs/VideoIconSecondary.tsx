import * as React from 'react';
import { SVGProps } from 'react';

function SvgVideoIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Video Icon</title>
      <path
        d="M14.35 2H1.65C0.74 2 0 2.74 0 3.65V12.29C0 13.2 0.74 13.94 1.65 13.94H14.35C15.26 13.94 16 13.2 16 12.29V3.65C16 2.74 15.26 2 14.35 2ZM14.5 12.29C14.5 12.37 14.43 12.44 14.35 12.44H1.65C1.57 12.44 1.5 12.37 1.5 12.29V3.65C1.5 3.57 1.57 3.5 1.65 3.5H14.35C14.43 3.5 14.5 3.57 14.5 3.65V12.29Z"
        fill="currentColor"
      />
      <path
        d="M6.64 4.53C6.28 4.32 5.82 4.43 5.61 4.79C5.4 5.14 5.51 5.61 5.87 5.82L9.48 7.97L7 9.45V7.98C7 7.57 6.66 7.23 6.25 7.23C5.84 7.23 5.5 7.56 5.5 7.98V10.77C5.5 11.04 5.65 11.29 5.88 11.42C6 11.49 6.13 11.52 6.25 11.52C6.38 11.52 6.52 11.48 6.63 11.41L11.32 8.61C11.55 8.47 11.69 8.23 11.69 7.97C11.69 7.71 11.55 7.46 11.32 7.33L6.64 4.53Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgVideoIconSecondary;
