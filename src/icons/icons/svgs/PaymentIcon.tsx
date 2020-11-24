import * as React from 'react';

function SvgPaymentIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M.01 3.05v10h16v-10h-16zM14.76 4.3v1.95H1.26V4.3h13.5zm-13.5 7.5V7.5h13.5v4.3H1.26z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPaymentIcon;
