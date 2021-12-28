import * as React from 'react';
import { SVGProps } from 'react';

function SvgMoreIconSecondary(props: SVGProps<SVGSVGElement>) {
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
        d="M7.97 3.94C6.88 3.94 6 3.06 6 1.97 6 .88 6.88 0 7.97 0c1.09 0 1.97.88 1.97 1.97 0 1.09-.88 1.97-1.97 1.97Zm0-2.44a.47.47 0 1 0-.001.939.47.47 0 0 0 .001-.939ZM7.97 9.97C6.88 9.97 6 9.09 6 8c0-1.09.88-1.97 1.97-1.97 1.09 0 1.97.88 1.97 1.97 0 1.09-.88 1.97-1.97 1.97Zm0-2.44a.47.47 0 1 0-.001.939.47.47 0 0 0 .001-.939ZM7.97 16C6.88 16 6 15.12 6 14.03c0-1.09.88-1.97 1.97-1.97 1.09 0 1.97.88 1.97 1.97 0 1.09-.88 1.97-1.97 1.97Zm0-2.44a.47.47 0 1 0-.001.939.47.47 0 0 0 .001-.939Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMoreIconSecondary;
