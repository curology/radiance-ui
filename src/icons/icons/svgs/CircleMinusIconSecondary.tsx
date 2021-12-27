import * as React from 'react';
import { SVGProps } from 'react';

function SvgCircleMinusIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Circle Minus Icon</title>
      <path
        d="M8 0C3.59 0 0 3.59 0 8C0 12.41 3.59 16 8 16C12.41 16 16 12.41 16 8C16 3.59 12.41 0 8 0ZM8 14.5C4.42 14.5 1.5 11.58 1.5 8C1.5 4.42 4.42 1.5 8 1.5C11.58 1.5 14.5 4.42 14.5 8C14.5 11.58 11.58 14.5 8 14.5Z"
        fill="currentColor"
      />
      <path
        d="M11.7 7.25H4.3C3.89 7.25 3.55 7.59 3.55 8C3.55 8.41 3.89 8.75 4.3 8.75H11.69C12.1 8.75 12.44 8.41 12.44 8C12.44 7.59 12.11 7.25 11.7 7.25Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCircleMinusIconSecondary;
