import * as React from 'react';
import { SVGProps } from 'react';

function SvgMicIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.115 14.6h-6.21a.625.625 0 1 0 0 1.25h6.21a.625.625 0 1 0 0-1.25ZM13.598 9.658c.182-.3.558-.434.873-.282.315.151.449.53.272.831A7.732 7.732 0 0 1 8.12 14a7.638 7.638 0 0 1-6.839-4.18.59.59 0 0 1 .318-.81c.32-.132.685.023.848.33a6.376 6.376 0 0 0 4.963 3.35v-1.81c-1.7-.3-3-1.78-3-3.56V3.71C4.41 1.72 6.04.09 8.03.09c1.99 0 3.62 1.62 3.62 3.62v2.67a.62.62 0 0 1-1.24 0V3.71c0-1.31-1.07-2.38-2.38-2.38-1.31 0-2.38 1.07-2.38 2.38v3.61c0 1.31 1.07 2.38 2.38 2.38.316 0 .62.229.62.545V12.7a6.453 6.453 0 0 0 4.948-3.042Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMicIconSecondary;
