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
      <path d="M19 19.01V9.53l-8.99-8.52L1 9.26v9.75h18Z" fill="currentColor" />
    </svg>
  );
}

export default SvgHomeSelectedNavIcon;
