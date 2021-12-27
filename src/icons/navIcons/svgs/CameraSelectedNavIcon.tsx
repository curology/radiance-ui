import * as React from 'react';
import { SVGProps } from 'react';

function SvgCameraSelectedNavIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Camera Selected Nav Icon</title>
      <path
        d="M15.92 3.2L14.1 1H5.91L4.11 3.2H0V18.12H20V3.2H15.92ZM10.01 14.36C7.75 14.36 5.92 12.53 5.92 10.27C5.92 8.01 7.75 6.18 10.01 6.18C12.27 6.18 14.1 8.01 14.1 10.27C14.1 12.53 12.27 14.36 10.01 14.36Z"
        fill="currentColor"
      />
      <path
        d="M10.01 7.42993C11.58 7.42993 12.85 8.69993 12.85 10.2699C12.85 11.8399 11.58 13.1099 10.01 13.1099C8.43999 13.1099 7.16998 11.8399 7.16998 10.2699C7.16998 8.69993 8.44999 7.42993 10.01 7.42993Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCameraSelectedNavIcon;
