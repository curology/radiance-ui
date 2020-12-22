import * as React from 'react';

function SvgProfileNavIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.24 12.47A6.5 6.5 0 103.55 7.5c0 1.99.89 3.76 2.29 4.96C4.06 13.61 3 15.57 3 18.03v.62h14.07v-.62c0-2.45-1.05-4.41-2.83-5.56zM4.8 7.5c0-2.89 2.35-5.25 5.25-5.25 2.89 0 5.25 2.36 5.25 5.25a5.249 5.249 0 01-4.19 5.14h-.02c-.34.07-.68.11-1.04.11s-.7-.04-1.04-.11h-.02c-.69-.14-1.34-.42-1.9-.81A5.209 5.209 0 014.8 7.5zm-.52 9.9c.17-1.91 1.15-3.37 2.72-4.16.91.48 1.95.76 3.05.76 1.1 0 2.13-.27 3.04-.75 1.56.78 2.54 2.24 2.71 4.15H4.28z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgProfileNavIcon;
