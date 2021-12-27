import * as React from 'react';
import { SVGProps } from 'react';

function SvgStarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Star Icon</title>
      <path
        d="M8.01001 2.89007L9.36001 5.63007L9.65001 6.22007L10.3 6.31007L13.32 6.75007L11.13 8.88007L10.66 9.34007L10.77 9.99007L11.29 13.0001L8.59 11.5801L8.01001 11.2701L7.43001 11.5801L4.72001 13.0001L5.24001 9.99007L5.35001 9.34007L4.88 8.88007L2.69001 6.75007L5.71001 6.31007L6.36001 6.22007L6.65001 5.63007L8.01001 2.89007ZM8.01001 0.0700684L5.54001 5.08007L0.0100098 5.88007L4.01001 9.78007L3.07001 15.2901L8.01001 12.6901L12.95 15.2901L12.01 9.78007L16.01 5.88007L10.48 5.08007L8.01001 0.0700684Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgStarIcon;
