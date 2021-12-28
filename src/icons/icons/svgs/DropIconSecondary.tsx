import * as React from 'react';
import { SVGProps } from 'react';

function SvgDropIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Drop Icon</title>
      <path
        d="M10.92 7.19c-.17-.2-.33-.4-.49-.6C8.79 4.47 8.64.76 8.64.73A.751.751 0 0 0 7.89 0h-.01c-.41.01-.74.34-.74.75 0 .04-.02 3.49-1.9 5.83C4.24 7.82 3 9.37 3 11.32 3 13.99 5.1 16 7.89 16c2.93 0 4.89-1.94 4.89-4.84 0-1.72-.99-2.92-1.86-3.97ZM7.89 14.5c-1.96 0-3.39-1.34-3.39-3.18 0-1.42.97-2.63 1.96-3.86.65-.81 1.1-1.73 1.43-2.62.31.93.74 1.88 1.36 2.67.17.21.34.43.52.64.81.99 1.52 1.84 1.52 3.02-.01 2.05-1.31 3.33-3.4 3.33Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDropIconSecondary;
