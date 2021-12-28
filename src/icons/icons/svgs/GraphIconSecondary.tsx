import * as React from 'react';
import { SVGProps } from 'react';

function SvgGraphIconSecondary(props: SVGProps<SVGSVGElement>) {
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
        d="M15.24 14.49H2.1c-.33 0-.6-.27-.6-.6V.75C1.5.34 1.16 0 .75 0S0 .34 0 .75v13.14c0 1.16.94 2.1 2.1 2.1h13.14c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Z"
        fill="currentColor"
      />
      <path
        d="M5.07 11.67c.41 0 .75-.34.75-.75V7.06c0-2.75.73-2.75 1.26-2.75.42 0 1.2 0 1.2 3.08 0 3.53 1.48 4.27 2.73 4.27 1.76 0 2.65-1.15 2.65-3.42V6c.15.17.35.28.56.28a.755.755 0 0 0 .63-1.17l-1.31-1.96c-.01-.01-.03-.02-.04-.03a.73.73 0 0 0-.58-.3c-.24 0-.45.12-.58.3-.01.01-.03.02-.04.03l-1.31 1.96c-.23.34-.14.81.21 1.04.3.21.72.14.96-.15v2.25c0 1.61-.4 1.92-1.15 1.92-.82 0-1.23-.93-1.23-2.77 0-1.25 0-4.58-2.7-4.58-2.76 0-2.76 2.98-2.76 4.25v3.85c0 .41.34.75.75.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgGraphIconSecondary;
