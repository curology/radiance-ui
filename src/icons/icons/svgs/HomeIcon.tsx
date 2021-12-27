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
      <title>Home Icon</title>
      <path
        d="M8 2.21L14.25 8.14V14.25H10.79H5.21H1.75V7.92L8 2.21ZM8.01 0.5L0.5 7.37V15.5H5.21H10.8H15.5V7.6L8.01 0.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHomeIcon;
