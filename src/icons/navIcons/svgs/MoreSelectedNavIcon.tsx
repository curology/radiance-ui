import * as React from 'react';

function SvgMoreSelectedNavIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.62 5.24a1.62 1.62 0 100-3.24 1.62 1.62 0 000 3.24zM10.62 11.49a1.62 1.62 0 100-3.24 1.62 1.62 0 000 3.24zM10.62 17.74a1.62 1.62 0 100-3.24 1.62 1.62 0 000 3.24z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMoreSelectedNavIcon;
