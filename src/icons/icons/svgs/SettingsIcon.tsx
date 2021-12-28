import * as React from 'react';
import { SVGProps } from 'react';

function SvgSettingsIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M11.981 1.145H4.06L.088 8.01l3.972 6.865h7.921l3.96-6.865-3.96-6.865ZM1.532 8.01 4.78 2.395h6.479l3.24 5.615-3.24 5.615H4.78L1.532 8.01Zm7.568 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSettingsIcon;
