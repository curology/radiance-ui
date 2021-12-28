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
      <path
        d="M15.25 7.21H3.75C5 6.28 6.19 4.85 6.19 2.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75C4.69 5.94.58 7.2.54 7.21a.73.73 0 0 0-.54.73c.01.34.24.63.57.71.17.04 4.07 1.07 4.07 4.52 0 .41.34.75.75.75s.75-.34.75-.75c0-2.02-1.01-3.48-2.22-4.46h11.34c.41 0 .75-.34.75-.75s-.35-.75-.76-.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgArrowLeftIconSecondary;
