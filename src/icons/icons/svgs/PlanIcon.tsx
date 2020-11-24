import * as React from 'react';

function SvgPlanIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.25 1.25h11.5v13.5H1.25V1.25zM0 0h14v16H0V0zm3 4.625h8v-1.25H3v1.25zm8 3H3v-1.25h8v1.25zm-8 3h4v-1.25H3v1.25z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPlanIcon;
