import * as React from 'react';
import { SVGProps } from 'react';

function SvgLightningIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Lightning Icon</title>
      <path
        d="M8.00001 16C7.68001 16 7.38001 15.79 7.28001 15.47L5.03001 8.22002C4.96001 8.00002 5.00001 7.75002 5.15001 7.55002C5.29001 7.36002 5.52001 7.25002 5.75001 7.25002H9.23001L7.28001 0.97002C7.16001 0.57002 7.38001 0.15002 7.77001 0.0300203C8.17001 -0.0899797 8.59001 0.13002 8.71001 0.52002L10.96 7.77002C11.04 8.01002 11 8.25002 10.85 8.45002C10.71 8.64002 10.48 8.75002 10.25 8.75002H6.77001L8.72001 15.03C8.84001 15.43 8.62001 15.85 8.23001 15.97C8.15001 15.99 8.07001 16 8.00001 16Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLightningIconSecondary;
