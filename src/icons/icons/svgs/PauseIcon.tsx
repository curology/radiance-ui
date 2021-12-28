import * as React from 'react';
import { SVGProps } from 'react';

function SvgPauseIcon(props: SVGProps<SVGSVGElement>) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.27.04h1.25v16H5.27v-16Zm4.25 0h1.25v16H9.52v-16Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPauseIcon;
