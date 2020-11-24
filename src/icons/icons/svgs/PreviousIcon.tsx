import * as React from 'react';

function SvgPreviousIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M14.11 13.71V2.54l-7.85 5.8 7.85 5.37zm-10-5.33L15.36.07v16.01L4.11 8.38zM.14.08h1.25v16H.14v-16z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPreviousIcon;
