import * as React from 'react';
import { SVGProps } from 'react';

function SvgPlusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Plus Icon</title>
      <path
        d="M16.01 7.42004H8.64001V0.0400391H7.39001V7.42004H0.0100098V8.67004H7.39001V16.04H8.64001V8.67004H16.01V7.42004Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPlusIcon;
