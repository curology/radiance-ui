import * as React from 'react';
import { SVGProps } from 'react';

function SvgMicIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Mic Icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.65 12.7c2.24-.19 4.27-1.55 5.25-3.6l1.14.55A7.726 7.726 0 0 1 8.12 14a7.64 7.64 0 0 1-7.1-4.75l1.16-.48c.9 2.19 2.91 3.67 5.23 3.92v-1.81c-1.7-.3-3-1.78-3-3.56V3.71C4.41 1.72 6.04.09 8.03.09c1.99 0 3.62 1.62 3.62 3.62v3.61c0 1.78-1.3 3.26-3 3.56v1.82Zm-3-8.99v3.61c0 1.31 1.07 2.38 2.38 2.38 1.31 0 2.38-1.07 2.38-2.38V3.71c0-1.31-1.07-2.38-2.38-2.38-1.31 0-2.38 1.07-2.38 2.38ZM4.28 14.8h7.46v1.25H4.28V14.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMicIcon;
