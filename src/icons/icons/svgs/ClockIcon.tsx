import * as React from 'react';
import { SVGProps } from 'react';

function SvgClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Clock Icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M-0.0400391 7.98999C-0.0400391 3.56999 3.53996 -0.0100098 7.95996 -0.0100098C12.38 -0.0100098 15.96 3.56999 15.96 7.98999C15.96 12.41 12.38 15.99 7.95996 15.99C3.53996 15.99 -0.0400391 12.41 -0.0400391 7.98999ZM1.20996 7.98999C1.20996 11.71 4.23996 14.74 7.95996 14.74C11.69 14.74 14.71 11.71 14.71 7.98999C14.71 4.26999 11.68 1.23999 7.95996 1.23999C4.23996 1.23999 1.20996 4.26999 1.20996 7.98999ZM7.33997 4.37988H8.58997V8.52988H12.02V9.77988H7.33997V4.37988Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgClockIcon;
