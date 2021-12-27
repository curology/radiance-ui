import * as React from 'react';
import { SVGProps } from 'react';

function SvgUploadIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Upload Icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.282 4.2881L8.06002 0.0661621L3.83807 4.2881L4.72196 5.17199L7.46497 2.42898V12.35H8.71497V2.48888L11.3981 5.17199L12.282 4.2881ZM1.685 11.4299H2.935V14.7649H13.255V11.4299H14.505V16.0149H1.685V11.4299Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgUploadIcon;
