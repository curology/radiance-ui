import * as React from 'react';

function SvgPauseIconSecondary(props: React.SVGProps<SVGSVGElement>) {
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
        d="M4.56 0a.96.96 0 00-.96.96v14.08a.96.96 0 001.92 0V.96A.96.96 0 004.56 0zm6.859 0a.96.96 0 00-.96.96v14.08a.96.96 0 001.92 0V.96a.96.96 0 00-.96-.96z"
        fill="#332E54"
      />
    </svg>
  );
}

export default SvgPauseIconSecondary;
