import * as React from 'react';
import { SVGProps } from 'react';

function SvgProfileSelectedNavIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Profile Selected Nav Icon</title>
      <path
        d="M10.05 14C13.6398 14 16.55 11.0899 16.55 7.5C16.55 3.91015 13.6398 1 10.05 1C6.46014 1 3.54999 3.91015 3.54999 7.5C3.54999 11.0899 6.46014 14 10.05 14Z"
        fill="currentColor"
      />
      <path
        d="M15.22 13.26C16.4 14.43 17.07 16.07 17.07 18.03V18.65H3V18.03C3 16.06 3.68 14.42 4.86 13.25L5.88 14.02C7.08 14.79 8.51 15.25 10.05 15.25C11.58 15.25 13.01 14.8 14.21 14.03L15.22 13.26Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgProfileSelectedNavIcon;
