import * as React from 'react';
import { SVGProps } from 'react';

function SvgFlagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Flag Icon</title>
      <path
        d="M15.94 9.13L11.97 4.69L15.9 0.07L0 0V16H1.25V9.07L15.94 9.13ZM13.22 1.3L10.33 4.7L13.16 7.87L1.25 7.82V1.25L13.22 1.3Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFlagIcon;
