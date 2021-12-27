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
      <title>Settings Icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.981 1.14502H4.05953L0.0879517 8.01001L4.05953 14.875H11.981L15.9416 8.01001L11.981 1.14502ZM1.53206 8.01001L4.78048 2.39502H11.259L14.4985 8.01001L11.259 13.625H4.78048L1.53206 8.01001ZM9.09998 8.01001C9.09998 8.56229 8.65226 9.01001 8.09998 9.01001C7.54769 9.01001 7.09998 8.56229 7.09998 8.01001C7.09998 7.45773 7.54769 7.01001 8.09998 7.01001C8.65226 7.01001 9.09998 7.45773 9.09998 8.01001Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSettingsIcon;
