import * as React from 'react';
import { SVGProps } from 'react';

function SvgClipboardIconSecondary(props: SVGProps<SVGSVGElement>) {
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
        d="M13.19 0c-.41 0-.75.34-.75.75V14.5H3.5V.75C3.5.34 3.16 0 2.75 0S2 .34 2 .75v14.04c0 .67.54 1.21 1.2 1.21h9.54c.66 0 1.2-.54 1.2-1.21V.75c0-.41-.34-.75-.75-.75Z"
        fill="currentColor"
      />
      <path
        d="M5.1 3.94h5.74c.22 0 .43-.1.58-.27.14-.17.2-.4.16-.61L11.14.62A.759.759 0 0 0 10.4 0H5.54c-.36 0-.67.26-.74.62l-.44 2.44c-.04.22.02.44.16.61.15.17.36.27.58.27ZM6.17 1.5h3.6l.17.94H6l.17-.94Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgClipboardIconSecondary;
