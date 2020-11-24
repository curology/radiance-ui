import * as React from 'react';

function SvgSmileyEmoji(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 9.25c8.13 0 14.75 6.62 14.75 14.75 0 8.13-6.62 14.75-14.75 14.75-8.13 0-14.75-6.62-14.75-14.75 0-8.13 6.62-14.75 14.75-14.75zM24 8C15.16 8 8 15.16 8 24s7.16 16 16 16 16-7.16 16-16c0-8.83-7.16-16-16-16zm-5.95 13.96a1.18 1.18 0 11-2.36 0 1.18 1.18 0 012.36 0zm14.49 0a1.18 1.18 0 11-2.36 0 1.18 1.18 0 012.36 0zm-14.79 3.02a6.622 6.622 0 006.19 4.33c2.75 0 5.23-1.74 6.19-4.33l-1.17-.43a5.37 5.37 0 01-5.02 3.51 5.37 5.37 0 01-5.02-3.51l-1.17.43z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSmileyEmoji;
