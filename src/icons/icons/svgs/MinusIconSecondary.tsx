import * as React from 'react';
import { SVGProps } from 'react';

function SvgMinusIconSecondary(props: SVGProps<SVGSVGElement>) {
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
        d="M15.25 8.5H0.75C0.34 8.5 0 8.16 0 7.75C0 7.34 0.34 7 0.75 7H15.25C15.66 7 16 7.34 16 7.75C16 8.16 15.66 8.5 15.25 8.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMinusIconSecondary;
