import * as React from 'react';
import { SVGProps } from 'react';

function SvgHelpIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Help Icon</title>
      <path
        d="M12.09 0H3.9C1.75 0 0 1.75 0 3.9v8.19c0 2.15 1.75 3.9 3.9 3.9h8.19c2.15 0 3.9-1.75 3.9-3.9V3.9c0-2.15-1.75-3.9-3.9-3.9Zm2.4 12.09c0 1.32-1.08 2.4-2.4 2.4H3.9c-1.32 0-2.4-1.08-2.4-2.4V3.9c0-1.32 1.08-2.4 2.4-2.4h8.19c1.32 0 2.4 1.08 2.4 2.4v8.19Z"
        fill="currentColor"
      />
      <path
        d="M7.99 3c-2.69 0-4.5 1.34-4.5 3.32 0 .41.34.75.75.75s.75-.34.75-.75C4.99 4.98 6.61 4.5 8 4.5c1.79 0 2.99.61 2.99 1.52 0 .38 0 1.37-1.8 1.37h-1.2c-.41 0-.75.34-.75.75v1.4c0 .41.34.75.75.75s.75-.34.75-.75V8.9h.45c2.06 0 3.3-1.07 3.3-2.87 0-1.84-1.77-3.03-4.5-3.03ZM8 13.05a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHelpIconSecondary;
