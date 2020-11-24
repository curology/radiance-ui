import * as React from 'react';

function SvgArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M.01 7.41H13.6L7.27 1.09 8.15.2l7.86 7.86-8.19 7.87-.86-.9 6.62-6.37H.01V7.41z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgArrowRightIcon;
