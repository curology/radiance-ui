import * as React from 'react';
import { SVGProps } from 'react';

function SvgHomeIconSecondary(props: SVGProps<SVGSVGElement>) {
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
        d="m13.02 2.94-.12-.1C10.37.72 9.52 0 8.01 0c-1.45 0-2.35.77-4.5 2.62l-.32.27C1.34 4.48 0 5.62 0 7.75v7.5c0 .41.34.75.75.75s.75-.34.75-.75v-7.5c0-1.38.77-2.1 2.66-3.72l.32-.28C6.57 1.97 7.15 1.5 8.01 1.5c.92 0 1.53.48 3.92 2.49l.12.1c2.14 1.8 2.45 2.42 2.45 3.78v7.38c0 .41.34.75.75.75s.75-.34.75-.75V7.87c0-2.06-.78-3.08-2.98-4.93Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHomeIconSecondary;
