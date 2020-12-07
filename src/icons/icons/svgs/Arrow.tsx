import * as React from 'react';

function SvgArrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 46.29 32.92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M27.07 30.75a4.63 4.63 0 01-7.85 0L0 0h46.27z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgArrow;
