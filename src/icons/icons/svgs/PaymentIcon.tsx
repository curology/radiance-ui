import * as React from 'react';
import { SVGProps } from 'react';

function SvgPaymentIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Payment Icon</title>
      <path
        d="M0.0100098 3.05005V13.05H16.01V3.05005H0.0100098ZM14.76 4.30005V6.25005H1.26001V4.30005H14.76ZM1.26001 11.8V7.50005H14.76V11.8H1.26001Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPaymentIcon;
