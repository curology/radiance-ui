import * as React from 'react';

function SvgTimerIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M11.08 1.21v1.55a7.024 7.024 0 013.95 6.29c0 3.87-3.14 7.01-7.01 7.01-3.87 0-7.01-3.14-7.01-7.01 0-2.76 1.61-5.15 3.94-6.29V1.21c0-.62.51-1.13 1.13-1.13h3.87c.62 0 1.13.51 1.13 1.13zm-1.26.12H6.2v.96c.58-.16 1.18-.25 1.81-.25.63 0 1.23.1 1.81.25v-.96zM2.25 9.05c0 3.18 2.59 5.76 5.76 5.76 3.18 0 5.76-2.58 5.76-5.76 0-3.18-2.58-5.76-5.76-5.76-3.18 0-5.76 2.58-5.76 5.76zm5.13-3.08h1.26v3.45h2.84v1.25h-4.1v-4.7z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTimerIcon;
