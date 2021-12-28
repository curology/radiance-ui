import * as React from 'react';
import { SVGProps } from 'react';

function SvgStarIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Star Icon</title>
      <path
        d="M15.25 7.25H9.81l3.85-3.85c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0L8.75 6.19V.75C8.75.34 8.41 0 8 0s-.75.34-.75.75v5.44L3.4 2.34a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l3.85 3.85H.75C.34 7.25 0 7.59 0 8s.34.75.75.75h5.44L2.34 12.6c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l3.85-3.85v5.44c0 .41.34.75.75.75s.75-.34.75-.75V9.81l3.85 3.85c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06L9.81 8.75h5.44c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgStarIconSecondary;
