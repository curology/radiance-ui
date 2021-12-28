import * as React from 'react';
import { SVGProps } from 'react';

function SvgTransferIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Transfer Icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m10.95.89.89-.89L16 4.16 11.45 8.1l-.83-.95 2.78-2.4H4.73V3.49h8.82l-2.6-2.6Zm-6.79 6.6.89.89-2.6 2.6h8.82v1.26H2.6l2.78 2.4-.82.95L0 11.65l4.16-4.16Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTransferIcon;
