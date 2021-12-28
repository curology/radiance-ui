import * as React from 'react';
import { SVGProps } from 'react';

function SvgClipboardIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Clipboard Icon</title>
      <path
        d="M10.65 2.06v-2H5.48v2H2.51v14h11.1v-14h-2.96ZM6.71 1.3h2.71v.76H6.71V1.3Zm0 1.99h2.71V4H6.71v-.71Zm5.67 11.54H3.74V3.3h1.73v1.94h5.17V3.3h1.73v11.53h.01Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgClipboardIcon;
