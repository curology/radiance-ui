import * as React from 'react';
import { SVGProps } from 'react';

function SvgGiftIconSecondary(props: SVGProps<SVGSVGElement>) {
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
        d="M7.99 13.72c.41 0 .75-.34.75-.75v-2.56h4.2c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-4.2V6.45c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2.46H3.05c-.41 0-.75.34-.75.75s.34.75.75.75h4.19v2.56c0 .42.34.75.75.75Z"
        fill="currentColor"
      />
      <path
        d="M14.79 3.34h-1.31c-.41 0-.75.34-.75.75s.34.75.75.75h1.01v9.65H1.5V4.84h.98a.749.749 0 1 0 0-1.5H1.2c-.66 0-1.2.54-1.2 1.2v10.25c0 .66.54 1.2 1.2 1.2h13.59c.66 0 1.2-.54 1.2-1.2V4.54c0-.66-.54-1.2-1.2-1.2Z"
        fill="currentColor"
      />
      <path
        d="M6.33 4.84h3.33a2.42 2.42 0 0 0 0-4.84c-.65 0-1.24.26-1.67.67A2.47 2.47 0 0 0 6.33.01a2.42 2.42 0 0 0-2.42 2.41c0 1.34 1.08 2.42 2.42 2.42ZM9.66 1.5c.5 0 .91.41.91.92s-.41.92-.91.92h-.91v-.97c.02-.48.42-.87.91-.87Zm-3.33.01c.49 0 .89.38.92.86V3.34h-.92a.915.915 0 1 1 0-1.83Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgGiftIconSecondary;
