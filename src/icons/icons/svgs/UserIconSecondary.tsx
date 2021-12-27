import * as React from 'react';
import { SVGProps } from 'react';

function SvgUserIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>User Icon</title>
      <path
        d="M15.25 16.0001C14.84 16.0001 14.5 15.6601 14.5 15.2501V13.8601C14.5 12.3801 13.85 11.6301 12.58 11.6301H11.45C9.98 11.6301 8.96 10.7701 8.96 9.55006C8.96 8.74006 9.4 8.25006 9.76 7.86006C10.17 7.41006 10.52 7.02006 10.52 5.99006V4.06006C10.52 2.29006 9.25 1.50006 7.98 1.50006C6.97 1.50006 5.48 2.20006 5.48 4.13006V5.81006C5.48 6.95006 5.83 7.34006 6.24 7.79006C6.6 8.18006 7.04 8.68006 7.04 9.54006C7.04 10.5601 6.11 11.6201 4.55 11.6201H3.42C2.14 11.6201 1.5 12.3701 1.5 13.8501V15.2401C1.5 15.6601 1.17 16.0001 0.75 16.0001C0.33 16.0001 0 15.6601 0 15.2501V13.8601C0 11.5601 1.31 10.1301 3.42 10.1301H4.55C5.19 10.1301 5.54 9.79006 5.54 9.55006C5.54 9.27006 5.43 9.14006 5.13 8.80006C4.65 8.26006 3.98 7.53006 3.98 5.82006V4.13006C3.98 1.45006 6.04 6.10352e-05 7.98 6.10352e-05C10.32 6.10352e-05 12.02 1.71006 12.02 4.06006V5.99006C12.02 7.59006 11.35 8.33006 10.87 8.87006C10.56 9.21006 10.46 9.34006 10.46 9.55006C10.46 9.98006 10.99 10.1301 11.45 10.1301H12.58C14.69 10.1301 16 11.5601 16 13.8601V15.2501C16 15.6601 15.66 16.0001 15.25 16.0001Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgUserIconSecondary;
