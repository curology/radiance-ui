import * as React from 'react';
import { SVGProps } from 'react';

function SvgHelpIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Help Icon</title>
      <path
        d="M12.09 0H3.9C1.75 0 0 1.75 0 3.9V12.09C0 14.24 1.75 15.99 3.9 15.99H12.09C14.24 15.99 15.99 14.24 15.99 12.09V3.9C15.99 1.75 14.24 0 12.09 0ZM14.49 12.09C14.49 13.41 13.41 14.49 12.09 14.49H3.9C2.58 14.49 1.5 13.41 1.5 12.09V3.9C1.5 2.58 2.58 1.5 3.9 1.5H12.09C13.41 1.5 14.49 2.58 14.49 3.9V12.09Z"
        fill="currentColor"
      />
      <path
        d="M7.99 3C5.3 3 3.49 4.34 3.49 6.32C3.49 6.73 3.83 7.07 4.24 7.07C4.65 7.07 4.99 6.73 4.99 6.32C4.99 4.98 6.61 4.5 8 4.5C9.79 4.5 10.99 5.11 10.99 6.02C10.99 6.4 10.99 7.39 9.19 7.39H7.99C7.58 7.39 7.24 7.73 7.24 8.14V9.54C7.24 9.95 7.58 10.29 7.99 10.29C8.4 10.29 8.74 9.95 8.74 9.54V8.9H9.19C11.25 8.9 12.49 7.83 12.49 6.03C12.49 4.19 10.72 3 7.99 3Z"
        fill="currentColor"
      />
      <path
        d="M8 13.05C8.55228 13.05 9 12.6023 9 12.05C9 11.4977 8.55228 11.05 8 11.05C7.44772 11.05 7 11.4977 7 12.05C7 12.6023 7.44772 13.05 8 13.05Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHelpIconSecondary;
