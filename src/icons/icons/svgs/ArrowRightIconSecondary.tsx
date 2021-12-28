import * as React from 'react';
import { SVGProps } from 'react';

function SvgArrowRightIconSecondary(props: SVGProps<SVGSVGElement>) {
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
        d="M.76 8.71h11.5c-1.25.93-2.44 2.36-2.44 4.46 0 .41.34.75.75.75s.75-.34.75-.75c0-3.19 4.11-4.45 4.15-4.46a.73.73 0 0 0 .54-.73.748.748 0 0 0-.57-.71c-.17-.04-4.07-1.07-4.07-4.52 0-.41-.34-.75-.75-.75s-.75.34-.75.75c0 2.02 1.01 3.48 2.22 4.46H.75c-.41 0-.75.34-.75.75s.35.75.76.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgArrowRightIconSecondary;
