import * as React from 'react';
import { SVGProps } from 'react';

function SvgPlusIconSecondary(props: SVGProps<SVGSVGElement>) {
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
        d="M15.25 7.25H8.75V0.75C8.75 0.34 8.41 0 8 0C7.59 0 7.25 0.34 7.25 0.75V7.25H0.75C0.34 7.25 0 7.59 0 8C0 8.41 0.34 8.75 0.75 8.75H7.25V15.25C7.25 15.66 7.59 16 8 16C8.41 16 8.75 15.66 8.75 15.25V8.75H15.25C15.66 8.75 16 8.41 16 8C16 7.59 15.66 7.25 15.25 7.25Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPlusIconSecondary;
