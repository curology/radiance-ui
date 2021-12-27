import * as React from 'react';
import { SVGProps } from 'react';

function SvgInfoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Info Icon</title>
      <path
        d="M7.52 2C8.07229 2 8.52 1.55228 8.52 1C8.52 0.447715 8.07229 0 7.52 0C6.96772 0 6.52 0.447715 6.52 1C6.52 1.55228 6.96772 2 7.52 2Z"
        fill="currentColor"
      />
      <path
        d="M8.55 14.73V5.82998V4.73998L6 4.72998V5.97998H7.3V14.73H6V15.98H9.85V14.73H8.55Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgInfoIcon;
