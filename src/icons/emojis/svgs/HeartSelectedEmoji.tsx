import * as React from 'react';

function SvgHeartSelectedEmoji(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M24.57 37.986l-.33-.22c-.49-.33-12.12-8.18-14.65-12.31-3.03-4.95-1.23-9.69 1.24-12.25 1.88-1.95 4.68-3.04 7.48-2.89 1.61.08 3.79.58 5.89 2.34.64-.44 1.19-.8 1.64-1.07 5.05-3.01 9.81-1.33 12.29 1.66 2.85 3.44 3.32 8.11 1.23 12.17-2.25 4.34-13.96 12.03-14.46 12.35l-.33.22z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHeartSelectedEmoji;
