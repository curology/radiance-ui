import * as React from 'react';
import { SVGProps } from 'react';

function SvgHomeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m8 2.21 6.25 5.93v6.11H1.75V7.92L8 2.21ZM8.01.5.5 7.37v8.13h15V7.6L8.01.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHomeIcon;
