import * as React from 'react';
import { SVGProps } from 'react';

function SvgCameraIcon(props: SVGProps<SVGSVGElement>) {
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
        d="m10.69 2.25 1.46 1.77h2.61v9.43H1.26V4.02h2.63l.38-.46 1.06-1.3h5.36v-.01ZM11.28 1H4.73L3.29 2.76H0V14.7h16V2.77h-3.27L11.28 1Z"
        fill="currentColor"
      />
      <path
        d="M8.01 6.4c1.12 0 2.02.91 2.02 2.02 0 1.11-.91 2.02-2.02 2.02-1.11 0-2.02-.91-2.02-2.02 0-1.11.9-2.02 2.02-2.02Zm0-1.25c-1.81 0-3.27 1.47-3.27 3.27s1.47 3.27 3.27 3.27c1.81 0 3.27-1.47 3.27-3.27S9.81 5.15 8.01 5.15Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCameraIcon;
