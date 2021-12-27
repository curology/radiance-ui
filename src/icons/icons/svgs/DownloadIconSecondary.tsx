import * as React from 'react';
import { SVGProps } from 'react';

function SvgDownloadIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Download Icon</title>
      <path
        d="M13.22 9.86C11.2 9.86 9.74 10.87 8.75 12.09V4.74C8.75 4.33 8.41 3.99 8 3.99C7.59 3.99 7.25 4.32 7.25 4.74V12.25C6.32 11 4.88 9.81 2.78 9.81C2.37 9.81 2.03 10.15 2.03 10.56C2.03 10.97 2.37 11.31 2.78 11.31C5.97 11.31 7.23 15.43 7.24 15.47C7.34 15.78 7.63 16 7.96 16C7.96 16 7.97 16 7.98 16C8.32 15.99 8.61 15.76 8.69 15.43C8.73 15.26 9.76 11.36 13.22 11.36C13.63 11.36 13.97 11.02 13.97 10.61C13.97 10.2 13.63 9.86 13.22 9.86Z"
        fill="currentColor"
      />
      <path
        d="M14.8 0H1.2C0.54 0 0 0.53 0 1.19V6.64C0 7.05 0.34 7.39 0.75 7.39C1.16 7.39 1.5 7.06 1.5 6.64V1.5H14.5V6.64C14.5 7.05 14.84 7.39 15.25 7.39C15.66 7.39 16 7.06 16 6.64V1.19C16 0.53 15.46 0 14.8 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDownloadIconSecondary;
