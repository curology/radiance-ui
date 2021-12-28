import * as React from 'react';
import { SVGProps } from 'react';

function SvgCameraIconSecondary(props: SVGProps<SVGSVGElement>) {
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
        d="M14.78 13.92H1.22C.55 13.92 0 13.37 0 12.7V3.22C0 2.55.55 2 1.22 2h13.55c.68 0 1.23.55 1.23 1.22v9.48c0 .67-.55 1.22-1.22 1.22ZM1.5 12.42h13V3.5h-13v8.92Z"
        fill="currentColor"
      />
      <path
        d="M8 11.46c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5Zm0-5.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2ZM12.75 5.96c.41 0 .75-.34.75-.75s-.34-.75-.75-.75-.75.34-.75.75c0 .42.34.75.75.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCameraIconSecondary;
