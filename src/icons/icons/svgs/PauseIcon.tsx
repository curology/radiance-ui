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
      <title>Pause Icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.27002 0.0400391H6.52002V16.04H5.27002V0.0400391ZM9.52002 0.0400391H10.77V16.04H9.52002V0.0400391Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPauseIcon;
