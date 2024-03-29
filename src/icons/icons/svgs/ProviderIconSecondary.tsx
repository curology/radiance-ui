import * as React from 'react';
import { SVGProps } from 'react';

function SvgProviderIconSecondary(props: SVGProps<SVGSVGElement>) {
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
        d="M15.25 12.25h-1.5v-1.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.5h-1.5a.749.749 0 1 0 0 1.5h1.5v1.5c0 .41.34.75.75.75s.75-.34.75-.75v-1.5h1.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75ZM10.46 10.88V9.55c0-.21.1-.34.41-.68.49-.54 1.15-1.27 1.15-2.88V4.06c0-2.35-1.7-4.06-4.04-4.06-1.94 0-4 1.45-4 4.13v1.68c0 1.72.66 2.45 1.15 2.98.31.34.41.47.41.75 0 .24-.35.58-.99.58H3.42C1.31 10.13 0 11.56 0 13.86v1.39c0 .41.34.75.75.75s.75-.34.75-.75v-1.39c0-1.48.65-2.23 1.92-2.23h1.13c1.56 0 2.49-1.06 2.49-2.08 0-.87-.44-1.36-.8-1.75-.41-.46-.76-.85-.76-1.99V4.13c0-1.93 1.5-2.63 2.5-2.63 1.26 0 2.54.79 2.54 2.56v1.93c0 1.03-.35 1.42-.76 1.87-.36.39-.8.88-.8 1.69v1.33c0 .41.34.75.75.75s.75-.34.75-.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgProviderIconSecondary;
