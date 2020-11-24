import * as React from 'react';

function SvgBellIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.45 12.1l-1.4-3.24-1.08-5.41C12.4 1.81 11.23.2 7.98.2S3.54 1.81 2.97 3.45L1.88 8.86.5 12.11h4.03c0 2.05 1.55 3.72 3.45 3.72 1.9 0 3.45-1.67 3.45-3.72h4.02v-.01zM3.03 9.35l.05-.12.03-.13 1.06-5.32c.44-1.22 1.23-2.33 3.8-2.33 2.56 0 3.34 1.11 3.78 2.33l1.06 5.32.03.13.05.12.65 1.5H2.37l.66-1.5zm4.95 5.22c-1.21 0-2.2-1.11-2.2-2.47h4.4c-.01 1.37-.99 2.47-2.2 2.47z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBellIcon;
