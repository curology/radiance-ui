import * as React from 'react';
import { SVGProps } from 'react';

function SvgCirclePlusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Circle Plus Icon</title>
      <circle cx={8} cy={8} r={7.4} stroke="currentColor" strokeWidth={1.2} />
      <path fill="currentColor" d="M4 7.35h8v1.2H4z" />
      <path fill="currentColor" d="M7.4 11.95v-8h1.2v8z" />
    </svg>
  );
}

export default SvgCirclePlusIcon;
