import * as React from 'react';
import { SVGProps } from 'react';

function SvgSearchIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Search Icon</title>
      <path
        d="M15.25 16c-.19 0-.39-.07-.53-.22l-4.52-4.54c-1.11.88-2.5 1.37-3.91 1.37A6.312 6.312 0 0 1 0 6.3C0 2.82 2.82 0 6.29 0s6.29 2.83 6.29 6.3c0 .6-.08 1.2-.25 1.77-.12.4-.53.63-.93.51a.746.746 0 0 1-.51-.93c.13-.43.19-.89.19-1.35a4.8 4.8 0 0 0-4.79-4.8A4.8 4.8 0 0 0 1.5 6.3a4.8 4.8 0 0 0 4.79 4.8c1.27 0 2.51-.52 3.41-1.43a.75.75 0 0 1 1.06 0l5.02 5.05c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSearchIconSecondary;
