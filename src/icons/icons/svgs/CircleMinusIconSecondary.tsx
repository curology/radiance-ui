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
      <path
        d="M8 0C3.59 0 0 3.59 0 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8Zm0 14.5c-3.58 0-6.5-2.92-6.5-6.5S4.42 1.5 8 1.5s6.5 2.92 6.5 6.5-2.92 6.5-6.5 6.5Z"
        fill="currentColor"
      />
      <path
        d="M11.7 7.25H4.3c-.41 0-.75.34-.75.75s.34.75.75.75h7.39c.41 0 .75-.34.75-.75s-.33-.75-.74-.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCircleMinusIconSecondary;
