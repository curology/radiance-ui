import * as React from 'react';
import { SVGProps } from 'react';

function SvgLightbulbGlyphSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M24.55 8h-.23C17.54 8 14 12.78 14 17.5c0 3.49 1.43 6.32 4.25 8.41 1.93 1.43 2.31 2.44 2.31 3.61v3c0 .41.34.75.75.75s.75-.34.75-.75v-3c0-1.88-.85-3.27-2.92-4.81-2.45-1.83-3.64-4.19-3.64-7.21 0-3.85 2.76-8 8.82-8h.23c5.52 0 8.82 4.07 8.82 8 0 2.86-1.4 5.48-3.84 7.19-2.52 1.76-2.73 3.37-2.73 4.73v3.09c0 .41.34.75.75.75s.75-.34.75-.75v-3.09c0-.86 0-2.04 2.09-3.5 2.85-2 4.48-5.07 4.48-8.42 0-4.67-3.86-9.5-10.32-9.5ZM27.63 34.31h-6.4c-.41 0-.75.34-.75.75v4.19c0 .41.34.75.75.75h6.4c.41 0 .75-.34.75-.75v-4.19c0-.41-.33-.75-.75-.75Zm-.75 4.19h-4.9v-2.69h4.9v2.69Z"
        fill="currentColor"
      />
      <path
        d="M25.17 32.52v-9.87c0-.41-.34-.75-.75-.75s-.75.34-.75.75v9.87c0 .41.34.75.75.75s.75-.34.75-.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLightbulbGlyphSecondary;
