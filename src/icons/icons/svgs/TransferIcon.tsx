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
        d="M10.95 0.889984L11.84 0L16 4.16L11.45 8.09998L10.62 7.14999L13.4 4.75H4.73001V3.48999H13.55L10.95 0.889984ZM4.16 7.48999L5.05 8.37997L2.45 10.98H11.27V12.24H2.6L5.38 14.64L4.56 15.59L0 11.65L4.16 7.48999Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTransferIcon;
