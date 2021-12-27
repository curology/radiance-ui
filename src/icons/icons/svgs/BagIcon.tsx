import * as React from 'react';
import { SVGProps } from 'react';

function SvgBagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Bag Icon</title>
      <path
        d="M13.88 3.16003H12.07C11.69 1.37003 10.14 0.0300293 7.96003 0.0300293C5.78003 0.0300293 4.23002 1.38003 3.85002 3.16003H2.15002L0.0200195 16.07H16.02L13.88 3.16003ZM5.66003 2.21003C6.20003 1.61003 7.02003 1.28003 7.96003 1.28003C8.90003 1.28003 9.71002 1.61003 10.26 2.21003C10.51 2.49003 10.7 2.81003 10.81 3.17003H5.13003C5.23003 2.81003 5.41003 2.49003 5.66003 2.21003ZM3.20002 4.41003H3.76003H12.15H12.81L14.53 14.82H1.48003L3.20002 4.41003Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBagIcon;
