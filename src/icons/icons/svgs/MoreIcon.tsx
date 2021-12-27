import * as React from 'react';
import { SVGProps } from 'react';

function SvgMoreIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>More Icon</title>
      <path
        d="M8.16 7.09C8.66 7.09 9.07 7.5 9.07 8C9.07 8.5 8.66 8.91 8.16 8.91C7.66 8.91 7.25 8.5 7.25 8C7.25 7.5 7.66 7.09 8.16 7.09ZM8.16 5.84C6.97 5.84 6 6.81 6 8C6 9.19 6.97 10.16 8.16 10.16C9.35 10.16 10.32 9.19 10.32 8C10.32 6.81 9.35 5.84 8.16 5.84Z"
        fill="currentColor"
      />
      <path
        d="M8.16 12.69C8.66 12.69 9.07 13.1 9.07 13.6C9.07 14.1 8.66 14.51 8.16 14.51C7.66 14.51 7.25 14.1 7.25 13.6C7.25 13.1 7.66 12.69 8.16 12.69ZM8.16 11.44C6.97 11.44 6 12.4 6 13.59C6 14.78 6.97 15.75 8.16 15.75C9.35 15.75 10.32 14.78 10.32 13.59C10.32 12.4 9.35 11.44 8.16 11.44Z"
        fill="currentColor"
      />
      <path
        d="M8.16 1.5C8.66 1.5 9.07 1.91 9.07 2.41C9.07 2.91 8.66 3.32 8.16 3.32C7.66 3.32 7.25 2.91 7.25 2.41C7.25 1.91 7.66 1.5 8.16 1.5ZM8.16 0.25C6.97 0.25 6 1.22 6 2.41C6 3.6 6.97 4.57 8.16 4.57C9.35 4.57 10.32 3.6 10.32 2.41C10.32 1.22 9.35 0.25 8.16 0.25Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMoreIcon;
