import * as React from 'react';
import { SVGProps } from 'react';

function SvgPostcardIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Postcard Icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.64001 0.0100098V16H13.8V0.0100098H2.64001ZM12.55 14.75H3.89001V1.26001H12.55V14.75ZM10.81 3.1001H5.63V8.28009H10.81V3.1001ZM9.56 7.03009H6.88V4.3501H9.56V7.03009ZM6.03003 11.0701H10.41V12.3201H6.03003V11.0701Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPostcardIcon;
