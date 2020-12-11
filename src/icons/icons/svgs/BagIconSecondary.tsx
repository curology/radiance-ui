import * as React from 'react';

function SvgBagIconSecondary(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.65 16h-7.3C1.95 16 0 14.04 0 11.64V5.67c0-.41.34-.75.75-.75h9.11v-1C9.86 1.75 8.8 1.5 8 1.5c-.4 0-1.61 0-1.83 1.78a.746.746 0 11-1.48-.18C4.92 1.16 6.16 0 8 0c2.13 0 3.36 1.43 3.36 3.93l.01 1.75c0 .2-.08.39-.22.53-.15.14-.31.2-.54.22l-.94-.01H1.5v5.22c0 1.58 1.28 2.86 2.85 2.86h7.29c1.57 0 2.85-1.28 2.85-2.86V6.42h-1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.75c.41 0 .75.34.75.75v5.97C16 14.04 14.05 16 11.65 16z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBagIconSecondary;
