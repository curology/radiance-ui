import * as React from 'react';

function SvgHomeNavIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 2.71l7.75 7.35v7.7H2.25V9.79L10 2.71zM10.01 1L1 9.24V19h18V9.52L10.01 1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHomeNavIcon;
