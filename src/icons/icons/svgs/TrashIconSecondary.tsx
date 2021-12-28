import * as React from 'react';
import { SVGProps } from 'react';

function SvgTrashIconSecondary(props: SVGProps<SVGSVGElement>) {
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
        d="M14.25 2.69h-2.76C11.44 1.5 11.09 0 8.62 0c-2 0-2.94.82-3.09 2.69H2.75c-.41 0-.75.34-.75.75s.34.75.75.75h.37v10.15c0 .91.74 1.65 1.65 1.65h7.46c.91 0 1.65-.74 1.65-1.65V4.19h.37c.41 0 .75-.34.75-.75s-.34-.75-.75-.75ZM8.62 1.5c1.08 0 1.32.23 1.37 1.19H7.02c.09-1.02.5-1.19 1.6-1.19Zm3.76 12.84c0 .08-.07.15-.15.15H4.77c-.08 0-.15-.07-.15-.15V4.19h7.76v10.15Z"
        fill="currentColor"
      />
      <path
        d="M7 12.84c.41 0 .75-.34.75-.75v-5.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75v5.5c0 .42.34.75.75.75ZM10 12.84c.41 0 .75-.34.75-.75v-5.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75v5.5c0 .42.34.75.75.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTrashIconSecondary;
