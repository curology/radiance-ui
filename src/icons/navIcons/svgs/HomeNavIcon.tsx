import * as React from 'react';
import { SVGProps } from 'react';

function SvgHomeNavIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Home Nav Icon</title>
      <path
        d="m10 2.71 7.75 7.35v7.7H2.25V9.79L10 2.71ZM10.01 1 1 9.24V19h18V9.52L10.01 1Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHomeNavIcon;
