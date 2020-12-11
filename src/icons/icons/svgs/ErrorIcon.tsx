import * as React from 'react';

function SvgErrorIcon(props: React.SVGProps<SVGSVGElement>) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.6 6.79a6.747 6.747 0 00-7.9-5.36 6.7 6.7 0 00-4.31 2.84 6.71 6.71 0 00-1.04 5.06 6.747 6.747 0 007.9 5.36 6.7 6.7 0 004.31-2.84 6.71 6.71 0 001.04-5.06zM6.46.2C6.97.11 7.48.06 7.98.06a7.996 7.996 0 011.5 15.85c-.51.09-1.02.14-1.52.14-3.76 0-7.12-2.66-7.85-6.49A7.996 7.996 0 016.46.2zm.86 3.91h1.41v5.26H7.32V4.11zm-.17 6.83c0-.48.39-.84.88-.84s.88.36.88.84c0 .49-.39.86-.88.86s-.88-.37-.88-.86z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgErrorIcon;
