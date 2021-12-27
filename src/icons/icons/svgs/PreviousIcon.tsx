import * as React from 'react';
import { SVGProps } from 'react';

function SvgPreviousIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Previous Icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.11 13.7101V2.54007L6.25998 8.34007L14.11 13.7101ZM4.10999 8.38007L15.36 0.0700684V16.0801L4.10999 8.38007ZM0.140015 0.0800781H1.39001V16.0801H0.140015V0.0800781Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPreviousIcon;
