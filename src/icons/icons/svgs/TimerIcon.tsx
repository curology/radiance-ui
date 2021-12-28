import * as React from 'react';
import { SVGProps } from 'react';

function SvgTimerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Timer Icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.08 1.21v1.55a7.024 7.024 0 0 1 3.95 6.29c0 3.87-3.14 7.01-7.01 7.01-3.87 0-7.01-3.14-7.01-7.01 0-2.76 1.61-5.15 3.94-6.29V1.21c0-.62.51-1.13 1.13-1.13h3.87c.62 0 1.13.51 1.13 1.13Zm-1.26.12H6.2v.96c.58-.16 1.18-.25 1.81-.25.63 0 1.23.1 1.81.25v-.96ZM2.25 9.05c0 3.18 2.59 5.76 5.76 5.76 3.18 0 5.76-2.58 5.76-5.76 0-3.18-2.58-5.76-5.76-5.76-3.18 0-5.76 2.58-5.76 5.76Zm5.13-3.08h1.26v3.45h2.84v1.25h-4.1v-4.7Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTimerIcon;
