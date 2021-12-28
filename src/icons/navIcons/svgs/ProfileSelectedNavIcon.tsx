import * as React from 'react';
import { SVGProps } from 'react';

function SvgProfileSelectedNavIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Profile Selected Nav Icon</title>
      <path
        d="M10.05 14a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z"
        fill="currentColor"
      />
      <path
        d="M15.22 13.26c1.18 1.17 1.85 2.81 1.85 4.77v.62H3v-.62c0-1.97.68-3.61 1.86-4.78l1.02.77a7.686 7.686 0 0 0 8.33.01l1.01-.77Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgProfileSelectedNavIcon;
