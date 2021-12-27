import * as React from 'react';
import { SVGProps } from 'react';

function SvgErrorIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Error Icon</title>
      <path
        d="M12.09 0H3.9C1.75 0 0 1.75 0 3.9V12.09C0 14.24 1.75 15.99 3.9 15.99H12.09C14.24 15.99 15.99 14.24 15.99 12.09V3.9C15.99 1.75 14.24 0 12.09 0ZM14.49 12.09C14.49 13.41 13.41 14.49 12.09 14.49H3.9C2.58 14.49 1.5 13.41 1.5 12.09V3.9C1.5 2.58 2.58 1.5 3.9 1.5H12.09C13.41 1.5 14.49 2.58 14.49 3.9V12.09Z"
        fill="currentColor"
      />
      <path
        d="M8 10.3C8.41 10.3 8.75 9.96 8.75 9.55V3.75C8.75 3.33 8.41 3 8 3C7.59 3 7.25 3.33 7.25 3.75V9.55C7.25 9.96 7.58 10.3 8 10.3Z"
        fill="currentColor"
      />
      <path
        d="M8.01 13.05C8.56228 13.05 9.01 12.6023 9.01 12.05C9.01 11.4977 8.56228 11.05 8.01 11.05C7.45772 11.05 7.01 11.4977 7.01 12.05C7.01 12.6023 7.45772 13.05 8.01 13.05Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgErrorIconSecondary;
