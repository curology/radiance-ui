import * as React from 'react';
import { SVGProps } from 'react';

function SvgPlanIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Plan Icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.25 1.25H12.75V14.75H1.25V1.25ZM0 0H1.25H12.75H14V1.25V14.75V16H12.75H1.25H0V14.75V1.25V0ZM3 4.625H11V3.375H3V4.625ZM11 7.625H3V6.375H11V7.625ZM3 10.625H7V9.375H3V10.625Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPlanIcon;
