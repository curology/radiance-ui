import * as React from 'react';

function SvgLocationIcon(props: React.SVGProps<SVGSVGElement>) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.62 5.91c0-2.54-2.07-4.61-4.61-4.61-2.54 0-4.6 2.06-4.6 4.61 0 3.22 3.1 6.83 4.62 8.41 1.52-1.55 4.59-5.08 4.59-8.41zM2.16 5.9a5.851 5.851 0 0111.7 0c0 5.03-5.85 10.15-5.85 10.15S2.16 10.76 2.16 5.9zm3.73 1.09a2.121 2.121 0 004.24 0 2.121 2.121 0 00-4.24 0zm1.25 0a.87.87 0 111.741.001.87.87 0 01-1.741 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLocationIcon;
