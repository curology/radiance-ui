import * as React from 'react';

function SvgPaymentIconSecondary(props: React.SVGProps<SVGSVGElement>) {
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
        d="M14.8 2H.75C.34 2 0 2.34 0 2.75v2.29c0 .66.54 1.2 1.2 1.2h11.62c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H1.5V3.5h13v8.94h-13V7.79c0-.41-.34-.75-.75-.75S0 7.38 0 7.79v4.95c0 .66.54 1.2 1.2 1.2h13.6c.66 0 1.2-.54 1.2-1.2V3.2c0-.66-.54-1.2-1.2-1.2z"
        fill="currentColor"
      />
      <path
        d="M6.65 10.52c.41 0 .75-.34.75-.75v-2c0-.41-.34-.75-.75-.75h-2.9c-.41 0-.75.34-.75.75v1.99c0 .41.34.75.75.75h2.9v.01zm-2.15-2h1.4v.49H4.5v-.49z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPaymentIconSecondary;
