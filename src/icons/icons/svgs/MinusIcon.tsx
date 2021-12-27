import * as React from 'react';
import { SVGProps } from 'react';

function SvgMinusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Minus Icon</title>
      <path
        d="M16.01 7.41992H0.0100098V8.66992H16.01V7.41992Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMinusIcon;
