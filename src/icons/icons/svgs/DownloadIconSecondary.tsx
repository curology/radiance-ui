import * as React from 'react';
import { SVGProps } from 'react';

function SvgDownloadIconSecondary(props: SVGProps<SVGSVGElement>) {
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
        d="M13.22 9.86c-2.02 0-3.48 1.01-4.47 2.23V4.74a.749.749 0 1 0-1.5 0v7.51C6.32 11 4.88 9.81 2.78 9.81c-.41 0-.75.34-.75.75s.34.75.75.75c3.19 0 4.45 4.12 4.46 4.16.1.31.39.53.72.53h.02c.34-.01.63-.24.71-.57.04-.17 1.07-4.07 4.53-4.07.41 0 .75-.34.75-.75s-.34-.75-.75-.75Z"
        fill="currentColor"
      />
      <path
        d="M14.8 0H1.2C.54 0 0 .53 0 1.19v5.45a.749.749 0 1 0 1.5 0V1.5h13v5.14a.749.749 0 1 0 1.5 0V1.19C16 .53 15.46 0 14.8 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDownloadIconSecondary;
