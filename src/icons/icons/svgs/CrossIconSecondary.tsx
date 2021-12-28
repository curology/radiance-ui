import * as React from 'react';
import { SVGProps } from 'react';

function SvgCrossIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m9.06 8 6.72-6.72c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0L8 6.94 1.28.22a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06L6.94 8 .22 14.72c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22L8 9.06l6.72 6.72c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06L9.06 8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCrossIconSecondary;
