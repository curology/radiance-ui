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
      <title>Clipboard Icon</title>
      <path
        d="M13.19 0C12.78 0 12.44 0.34 12.44 0.75V14.5H3.5V0.75C3.5 0.34 3.16 0 2.75 0C2.34 0 2 0.34 2 0.75V14.79C2 15.46 2.54 16 3.2 16H12.74C13.4 16 13.94 15.46 13.94 14.79V0.75C13.94 0.34 13.6 0 13.19 0Z"
        fill="currentColor"
      />
      <path
        d="M5.1 3.94H10.84C11.06 3.94 11.27 3.84 11.42 3.67C11.56 3.5 11.62 3.27 11.58 3.06L11.14 0.62C11.07 0.26 10.76 0 10.4 0H5.54C5.18 0 4.87 0.26 4.8 0.62L4.36 3.06C4.32 3.28 4.38 3.5 4.52 3.67C4.67 3.84 4.88 3.94 5.1 3.94ZM6.17 1.5H9.77L9.94 2.44H6L6.17 1.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgClipboardIconSecondary;
