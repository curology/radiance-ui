import * as React from 'react';
import { SVGProps } from 'react';

function SvgChevronIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Chevron Icon</title>
      <path
        d="M6.87999 12.88L6 12L9.55 8.44L6 4.88L6.87999 4L11.32 8.44L6.87999 12.88Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgChevronIcon;
