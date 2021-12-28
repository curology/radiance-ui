import * as React from 'react';
import { SVGProps } from 'react';

function SvgCameraSelectedNavIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Camera Selected Nav Icon</title>
      <path
        d="M15.92 3.2 14.1 1H5.91l-1.8 2.2H0v14.92h20V3.2h-4.08Zm-5.91 11.16c-2.26 0-4.09-1.83-4.09-4.09s1.83-4.09 4.09-4.09 4.09 1.83 4.09 4.09-1.83 4.09-4.09 4.09Z"
        fill="currentColor"
      />
      <path
        d="M10.01 7.43c1.57 0 2.84 1.27 2.84 2.84 0 1.57-1.27 2.84-2.84 2.84-1.57 0-2.84-1.27-2.84-2.84 0-1.57 1.28-2.84 2.84-2.84Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCameraSelectedNavIcon;
