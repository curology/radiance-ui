import * as React from 'react';
import { SVGProps } from 'react';

function SvgPauseIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Pause Icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.56 0a.96.96 0 0 0-.96.96v14.08a.96.96 0 0 0 1.92 0V.96A.96.96 0 0 0 4.56 0Zm6.859 0a.96.96 0 0 0-.96.96v14.08a.96.96 0 0 0 1.92 0V.96a.96.96 0 0 0-.96-.96Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPauseIconSecondary;
