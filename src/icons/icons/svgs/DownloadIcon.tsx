import * as React from 'react';
import { SVGProps } from 'react';

function SvgDownloadIcon(props: SVGProps<SVGSVGElement>) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.3595 7.10628L8.62497 9.8227V0H7.37497V9.79401L4.74632 7.11219L3.85363 7.98718L7.55363 11.762L7.99406 12.2114L8.44044 11.7679L12.2404 7.99309L11.3595 7.10628ZM-0.0250244 10.3377V15.404V16.029H0.599976H15.4H16.025V15.404V10.5364H14.775V14.779H1.22498V10.3377H-0.0250244Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDownloadIcon;
