import * as React from 'react';
import { SVGProps } from 'react';

function SvgBellIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Bell Icon</title>
      <path
        d="M15.45 12.1L14.05 8.85995L12.97 3.44995C12.4 1.80995 11.23 0.199951 7.98 0.199951C4.73 0.199951 3.54 1.80995 2.97 3.44995L1.88 8.85995L0.5 12.11H4.53C4.53 14.16 6.08 15.83 7.98 15.83C9.88 15.83 11.43 14.16 11.43 12.11H15.45V12.1ZM3.03 9.34995L3.08 9.22995L3.11 9.09995L4.17 3.77995C4.61 2.55995 5.4 1.44995 7.97 1.44995C10.53 1.44995 11.31 2.55995 11.75 3.77995L12.81 9.09995L12.84 9.22995L12.89 9.34995L13.54 10.85H8.08H7.82H2.37L3.03 9.34995ZM7.98 14.57C6.77 14.57 5.78 13.46 5.78 12.1H7.84H8.1H10.18C10.17 13.47 9.19 14.57 7.98 14.57Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBellIcon;
