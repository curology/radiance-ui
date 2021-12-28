import * as React from 'react';
import { SVGProps } from 'react';

function SvgChevronIconSecondary(props: SVGProps<SVGSVGElement>) {
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
        d="m11.713 7.3-6.5-5.14a.747.747 0 1 0-.93 1.17l5.78 4.57-5.65 4.77c-.32.27-.36.74-.09 1.06.16.18.37.27.58.27.17 0 .34-.06.48-.18l6.35-5.36a.73.73 0 0 0 .27-.58c0-.23-.11-.44-.29-.58Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgChevronIconSecondary;
