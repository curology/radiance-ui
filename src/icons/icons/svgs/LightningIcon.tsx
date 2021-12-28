import * as React from 'react';
import { SVGProps } from 'react';

function SvgLightningIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Lightning Icon</title>
      <path
        d="m8.87 16.08-1.12-.58 3.87-7.42H2.15l4-8 1.13.57-3.1 6.17h9.51l-4.82 9.26Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLightningIcon;
