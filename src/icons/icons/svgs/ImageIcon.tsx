import * as React from 'react';
import { SVGProps } from 'react';

function SvgImageIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M14.8 3.26v3.4l-.013-.007c-.866 1.41-2.276 2.466-3.944 2.432-1.111-.025-2.016-.674-3.49-1.861-.678-.549-1.247-.918-1.809-1.147-.573-.235-1.103-.31-1.681-.322-.96-.02-1.86.224-2.613.611V3.26H14.8Zm-3.983 7.075c1.606.033 2.967-.682 3.983-1.693v4.178H1.25V7.834a4.24 4.24 0 0 1 2.587-.83h.001c.472.01.84.069 1.233.23.403.164.864.45 1.496.962 1.406 1.133 2.641 2.103 4.25 2.139ZM0 14.07v-6.8l-.002-.002L0 7.266V2.01h16.05v12.06H0Zm12.8-8.39a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgImageIcon;
