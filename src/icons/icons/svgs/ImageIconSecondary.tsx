import * as React from 'react';
import { SVGProps } from 'react';

function SvgImageIconSecondary(props: SVGProps<SVGSVGElement>) {
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
        d="M15.25 2H.75C.34 2 0 2.34 0 2.75v10.44c0 .41.34.75.75.75h14.5c.41 0 .75-.34.75-.75V2.75c0-.41-.34-.75-.75-.75Zm-.75 1.5v7.23C11.95 9.21 8.72 9.11 8 9.11c-2.4 0-4.65.6-6.5 1.69V3.5h13Zm-.17 8.94H1.72c1.69-1.16 3.94-1.83 6.28-1.83 1.9 0 4.6.5 6.33 1.83Z"
        fill="currentColor"
      />
      <path
        d="M11.45 8.55c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2a2 2 0 0 0 2 2Zm0-2.5c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgImageIconSecondary;
