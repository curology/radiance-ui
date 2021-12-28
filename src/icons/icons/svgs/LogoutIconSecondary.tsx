import * as React from 'react';
import { SVGProps } from 'react';

function SvgLogoutIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Logout Icon</title>
      <path
        d="M3.74 8.75h7.51c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H3.9c1.22-.99 2.23-2.46 2.23-4.5 0-.41-.34-.75-.75-.75s-.75.34-.75.75c0 3.48-3.9 4.52-4.06 4.56-.33.08-.56.38-.57.71-.01.34.21.64.53.73.04.01 4.15 1.28 4.15 4.49 0 .41.34.75.75.75s.75-.34.75-.75c.01-2.11-1.19-3.56-2.44-4.49Z"
        fill="currentColor"
      />
      <path
        d="M14.81 0H9.36a.749.749 0 1 0 0 1.5h5.14v13H9.36a.749.749 0 1 0 0 1.5h5.45c.66 0 1.19-.54 1.19-1.2V1.2c0-.66-.54-1.2-1.19-1.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLogoutIconSecondary;
