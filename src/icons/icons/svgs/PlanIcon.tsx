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
        d="M1.25 1.25h11.5v13.5H1.25V1.25ZM0 0h14v16H0V0Zm3 4.625h8v-1.25H3v1.25Zm8 3H3v-1.25h8v1.25Zm-8 3h4v-1.25H3v1.25Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPlanIcon;
