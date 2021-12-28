import * as React from 'react';
import { SVGProps } from 'react';

function SvgMenuIconSecondary(props: SVGProps<SVGSVGElement>) {
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
        d="M7.25 13H.75c-.41 0-.75.34-.75.75s.34.75.75.75h6.5c.41 0 .75-.34.75-.75S7.66 13 7.25 13ZM15.25 8H.75C.34 8 0 8.34 0 8.75s.34.75.75.75h14.5c.41 0 .75-.34.75-.75S15.66 8 15.25 8ZM.75 4.5h14.5c.41 0 .75-.34.75-.75S15.66 3 15.25 3H.75C.34 3 0 3.34 0 3.75s.34.75.75.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMenuIconSecondary;
