import * as React from 'react';
import { SVGProps } from 'react';

function SvgTwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Twitter Icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.032 14.781c6.037 0 9.34-5.002 9.34-9.34 0-.141-.003-.283-.01-.424A6.663 6.663 0 0 0 16 3.317a6.602 6.602 0 0 1-1.885.518 3.3 3.3 0 0 0 1.443-1.816 6.61 6.61 0 0 1-2.084.796A3.284 3.284 0 0 0 7.879 5.81a9.32 9.32 0 0 1-6.765-3.43 3.282 3.282 0 0 0 1.015 4.382 3.266 3.266 0 0 1-1.485-.41l-.001.041a3.284 3.284 0 0 0 2.633 3.22 3.302 3.302 0 0 1-1.483.055 3.287 3.287 0 0 0 3.067 2.28A6.593 6.593 0 0 1 0 13.308a9.288 9.288 0 0 0 5.032 1.474Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTwitterIcon;
