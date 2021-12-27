import * as React from 'react';
import { SVGProps } from 'react';

function SvgMenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Menu Icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.02 1H0V2.25H16.02V1ZM16.02 7.73999H0V8.98999H16.02V7.73999ZM0 14.48H8.72V15.73H0V14.48Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMenuIcon;
