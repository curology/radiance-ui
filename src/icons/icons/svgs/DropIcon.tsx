import * as React from 'react';

function SvgDropIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M7.95 16.05c-3.52 0-6.38-2.86-6.38-6.38 0-3.35 5.34-8.61 5.95-9.2l.43-.42.43.42c.61.59 5.95 5.85 5.95 9.2 0 3.52-2.86 6.38-6.38 6.38zm0-14.26C6.19 3.58 2.82 7.47 2.82 9.66c0 2.83 2.3 5.13 5.13 5.13s5.13-2.3 5.13-5.13c0-2.18-3.38-6.08-5.13-7.87z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDropIcon;
