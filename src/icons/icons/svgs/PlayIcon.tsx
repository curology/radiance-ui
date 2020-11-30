import * as React from 'react';

function SvgPlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 16.04l11.25-7.7L2 .03v16.01zM3.25 2.51l7.85 5.8-7.85 5.37V2.51z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPlayIcon;
