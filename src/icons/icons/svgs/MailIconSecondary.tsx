import * as React from 'react';
import { SVGProps } from 'react';

function SvgMailIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Mail Icon</title>
      <path
        d="M8.48 3.22c0-.03.02-.06.02-.09V2.5H9c.41 0 .75-.34.75-.75S9.41 1 9 1H6.5c-.41 0-.75.34-.75.75s.34.75.75.75H7v.64c0 .03.01.06.02.08C4.19 3.59 2 6 2 8.92c0 3.17 2.58 5.75 5.75 5.75s5.75-2.58 5.75-5.75c0-2.92-2.19-5.33-5.02-5.7Zm-.73 9.95A4.26 4.26 0 0 1 3.5 8.92a4.26 4.26 0 0 1 4.25-4.25A4.26 4.26 0 0 1 12 8.92a4.26 4.26 0 0 1-4.25 4.25Z"
        fill="currentColor"
      />
      <path
        d="M10.09 8.17H8.5V6.58c0-.41-.34-.75-.75-.75S7 6.17 7 6.58v2.34c0 .41.34.75.75.75h2.34c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMailIconSecondary;
