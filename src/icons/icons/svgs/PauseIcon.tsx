import * as React from 'react';

function SvgPauseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.27.04h1.25v16H5.27v-16zm4.25 0h1.25v16H9.52v-16z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPauseIcon;
