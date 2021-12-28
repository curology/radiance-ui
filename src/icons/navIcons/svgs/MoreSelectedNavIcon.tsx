import * as React from 'react';
import { SVGProps } from 'react';

function SvgMoreSelectedNavIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>More Selected Nav Icon</title>
      <path
        d="M10.62 5.24a1.62 1.62 0 1 0 0-3.24 1.62 1.62 0 0 0 0 3.24ZM10.62 11.49a1.62 1.62 0 1 0 0-3.24 1.62 1.62 0 0 0 0 3.24ZM10.62 17.74a1.62 1.62 0 1 0 0-3.24 1.62 1.62 0 0 0 0 3.24Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMoreSelectedNavIcon;
