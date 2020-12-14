import * as React from 'react';

function SvgMenuIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M16.02 1H0v1.25h16.02V1zm0 6.74H0v1.25h16.02V7.74zM0 14.48h8.72v1.25H0v-1.25z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMenuIcon;
