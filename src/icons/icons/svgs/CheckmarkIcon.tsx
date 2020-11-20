import * as React from 'react';

function SvgCheckmarkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.96 2l-9.7 9.42L.88 7.1 0 7.99l5.26 5.18L15.83 2.9l-.87-.9z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCheckmarkIcon;
