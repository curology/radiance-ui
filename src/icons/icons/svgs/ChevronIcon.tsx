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
        d="M6.88 12.88 6 12l3.55-3.56L6 4.88 6.88 4l4.44 4.44-4.44 4.44Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgChevronIcon;
