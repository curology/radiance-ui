import * as React from 'react';
import { SVGProps } from 'react';

function SvgPlusIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M16.01 7.42H8.64V.04H7.39v7.38H.01v1.25h7.38v7.37h1.25V8.67h7.37V7.42Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPlusIcon;
