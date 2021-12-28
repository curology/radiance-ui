import * as React from 'react';
import { SVGProps } from 'react';

function SvgPreviousIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Previous Icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.11 13.71V2.54l-7.85 5.8 7.85 5.37Zm-10-5.33L15.36.07v16.01L4.11 8.38ZM.14.08h1.25v16H.14v-16Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPreviousIcon;
