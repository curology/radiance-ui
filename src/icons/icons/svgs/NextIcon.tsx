import * as React from 'react';
import { SVGProps } from 'react';

function SvgNextIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Next Icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.02 8.34003L0.77002 16.04V0.0300293L12.02 8.34003ZM9.87003 8.31003L2.02002 2.51003V13.68L9.87003 8.31003ZM14.74 0.0500488H15.99V16.05H14.74V0.0500488Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgNextIcon;
