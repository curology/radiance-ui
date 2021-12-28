import * as React from 'react';
import { SVGProps } from 'react';

function SvgEqualsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Equals Icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.692 7.95A6.742 6.742 0 0 0 7.95 1.208c-3.623 0-6.742 3.119-6.742 6.742a6.742 6.742 0 0 0 13.484 0ZM0 7.95C0 3.623 3.623 0 7.95 0 12.377 0 16 3.623 15.9 7.95c0 4.327-3.523 7.95-7.95 7.95C3.623 15.9 0 12.376 0 7.95Zm12.075-1.187h-8.15v-1.25h8.15v1.25Zm0 3.925h-8.15v-1.25h8.15v1.25Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgEqualsIcon;
