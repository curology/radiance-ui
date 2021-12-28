import * as React from 'react';
import { SVGProps } from 'react';

function SvgMailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Mail Icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.68 5.15V3.36H1.36v1.78l6.81 2.44 6.51-2.43ZM.01 2.01h16.01v4.07L8.17 9 .01 6.08V2.01ZM0 14.35l16 .01V8.17h-1.25v4.94l-13.5-.01V8.16H0v6.19Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMailIcon;
