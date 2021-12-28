import * as React from 'react';
import { SVGProps } from 'react';

function SvgTrashIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M16.03 2.73h-3.1A3.305 3.305 0 0 0 9.69.04H6.48C4.87.04 3.53 1.2 3.24 2.73H.02v1.25h2.19l1.26 11.1c.07.56.55.98 1.12.98h6.84c.56 0 1.04-.42 1.12-.99l1.37-11.1h2.11V2.73ZM6.48 1.29h3.21c.92 0 1.69.61 1.95 1.44h-7.1c.26-.83 1.02-1.44 1.94-1.44Zm4.84 13.52H9.87V6.97H8.62v7.84h-1.4V6.97H5.97v7.84H4.7L3.47 3.98h9.18l-1.33 10.83Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTrashIcon;
