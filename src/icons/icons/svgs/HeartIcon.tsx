import * as React from 'react';
import { SVGProps } from 'react';

function SvgHeartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Heart Icon</title>
      <path
        d="M11.27 1.75C13.19 1.75 14.76 3.51 14.76 5.67C14.76 7.45 13.21 8.93 13.19 8.94L13.17 8.96L13.15 8.98L8.32001 13.86L2.81 8.93C1.49 7.74 1.25 6.93 1.25 5.67C1.25 3.51 2.80999 1.75 4.73999 1.75C5.60999 1.75 6.45001 2.12 7.10001 2.8L8 3.74L8.89999 2.8C9.55999 2.12 10.4 1.75 11.27 1.75ZM11.27 0.5C9.99999 0.5 8.86001 1.05 8.01001 1.93C7.16001 1.05 6.02 0.5 4.75 0.5C2.13 0.5 0.0100098 2.81 0.0100098 5.67C0.0100098 7.4 0.470011 8.5 1.98001 9.86L8.38 15.59L14.04 9.86C14.04 9.86 16.01 8.04 16.01 5.67C16.01 2.81 13.89 0.5 11.27 0.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHeartIcon;
