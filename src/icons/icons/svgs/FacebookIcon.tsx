import * as React from 'react';
import { SVGProps } from 'react';

function SvgFacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Facebook Icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.93887 15.9706V8.68567H11.3842L11.7503 5.84656H8.93887V4.0339C8.93887 3.21191 9.1671 2.65177 10.3459 2.65177L11.8493 2.65107V0.111789C11.5892 0.0772511 10.6968 0 9.65859 0C7.49098 0 6.00707 1.32307 6.00707 3.75281V5.84656H3.55554V8.68567H6.00707V15.9706H8.93887Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFacebookIcon;
