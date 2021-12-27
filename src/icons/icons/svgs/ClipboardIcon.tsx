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
        d="M10.65 2.06006V0.0600586H5.48001V2.06006H2.51001V16.0601H13.61V2.06006H10.65ZM6.71001 1.30005H9.42001V2.06006H6.71001V1.30005ZM6.71001 3.29007H9.42001V4.00006H6.71001V3.29007ZM12.38 14.83H3.74001V3.30005H5.47001V5.24005H10.64V3.30005H12.37V14.83H12.38Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgClipboardIcon;
