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
        d="M2.64.01V16H13.8V.01H2.64Zm9.91 14.74H3.89V1.26h8.66v13.49ZM10.81 3.1H5.63v5.18h5.18V3.1ZM9.56 7.03H6.88V4.35h2.68v2.68Zm-3.53 4.04h4.38v1.25H6.03v-1.25Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPostcardIcon;
