import * as React from 'react';
import { SVGProps } from 'react';

function SvgErrorIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Error Icon</title>
      <path
        d="M12.09 0H3.9C1.75 0 0 1.75 0 3.9v8.19c0 2.15 1.75 3.9 3.9 3.9h8.19c2.15 0 3.9-1.75 3.9-3.9V3.9c0-2.15-1.75-3.9-3.9-3.9Zm2.4 12.09c0 1.32-1.08 2.4-2.4 2.4H3.9c-1.32 0-2.4-1.08-2.4-2.4V3.9c0-1.32 1.08-2.4 2.4-2.4h8.19c1.32 0 2.4 1.08 2.4 2.4v8.19Z"
        fill="currentColor"
      />
      <path
        d="M8 10.3c.41 0 .75-.34.75-.75v-5.8a.749.749 0 1 0-1.5 0v5.8c0 .41.33.75.75.75ZM8.01 13.05a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgErrorIconSecondary;
