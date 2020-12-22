import * as React from 'react';

function SvgClockIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M-.04 7.99c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8-8-3.58-8-8zm1.25 0c0 3.72 3.03 6.75 6.75 6.75 3.73 0 6.75-3.03 6.75-6.75s-3.03-6.75-6.75-6.75-6.75 3.03-6.75 6.75zm6.13-3.61h1.25v4.15h3.43v1.25H7.34v-5.4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgClockIcon;
