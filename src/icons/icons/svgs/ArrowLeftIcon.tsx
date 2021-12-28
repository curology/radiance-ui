import * as React from 'react';
import { SVGProps } from 'react';

function SvgArrowLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Arrow - Left Icon</title>
      <path
        d="M16 7.21H2.41L8.74.89 7.85 0 0 7.86l8.18 7.87.87-.9-6.63-6.37H16V7.21Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgArrowLeftIcon;
