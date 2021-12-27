import * as React from 'react';
import { SVGProps } from 'react';

function SvgHomeSelectedNavIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Home Selected Nav Icon</title>
      <path
        d="M19 19.01V9.53001L10.01 1.01001L1 9.26001V19.01H19Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHomeSelectedNavIcon;
