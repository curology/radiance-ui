import * as React from 'react';
import { SVGProps } from 'react';

function SvgPlusIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Plus Icon</title>
      <path
        d="M15.25 7.25h-6.5V.75C8.75.34 8.41 0 8 0s-.75.34-.75.75v6.5H.75C.34 7.25 0 7.59 0 8s.34.75.75.75h6.5v6.5c0 .41.34.75.75.75s.75-.34.75-.75v-6.5h6.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPlusIconSecondary;
