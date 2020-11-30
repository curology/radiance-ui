import * as React from 'react';

function SvgChevronIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.88 12.88L6 12l3.55-3.56L6 4.88 6.88 4l4.44 4.44-4.44 4.44z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgChevronIcon;
