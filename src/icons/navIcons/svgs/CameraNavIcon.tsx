import * as React from 'react';
import { SVGProps } from 'react';

function SvgCameraNavIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.52 2.25 14.97 4l.38.45h3.43v12.42H1.28V4.46h3.45L5.11 4l1.42-1.74h6.99v-.01ZM14.1 1H5.91l-1.8 2.2H0v14.92h20V3.21h-4.09L14.1 1Z"
        fill="currentColor"
      />
      <path
        d="M10.01 7.44c1.57 0 2.84 1.27 2.84 2.84 0 1.57-1.27 2.84-2.84 2.84-1.57 0-2.84-1.27-2.84-2.84 0-1.57 1.28-2.84 2.84-2.84Zm0-1.25c-2.26 0-4.09 1.83-4.09 4.09s1.83 4.09 4.09 4.09 4.09-1.83 4.09-4.09-1.83-4.09-4.09-4.09Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCameraNavIcon;
