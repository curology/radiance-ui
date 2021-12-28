import * as React from 'react';
import { SVGProps } from 'react';

function SvgStarFilledIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Star Filled Icon</title>
      <path
        d="M8.01.07 5.54 5.08l-5.53.8 4 3.9-.94 5.51 4.94-2.6 4.94 2.6-.94-5.51 4-3.9-5.53-.8L8.01.07Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgStarFilledIcon;
