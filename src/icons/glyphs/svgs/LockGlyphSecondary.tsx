import * as React from 'react';
import { SVGProps } from 'react';

function SvgLockGlyphSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Lock Glyph</title>
      <path
        d="M34.25 21.96c-.41 0-.75.34-.75.75v14.64c0 .63-.51 1.15-1.15 1.15h-15.7c-.63 0-1.15-.52-1.15-1.15V23.46h15.68c.41 0 .75-.34.75-.75v-6.09c0-5.48-2.71-8.62-7.43-8.62-4.58 0-7.43 3.22-7.43 8.41v3.44c0 .41.34.75.75.75s.75-.34.75-.75v-3.44c0-4.39 2.16-6.91 5.93-6.91 3.88 0 5.93 2.46 5.93 7.12v5.34H14.75c-.41 0-.75.34-.75.75v14.64c0 1.46 1.19 2.65 2.65 2.65h15.71c1.46 0 2.65-1.19 2.65-2.65V22.71a.77.77 0 0 0-.76-.75Z"
        fill="currentColor"
      />
      <path
        d="M28.78 35.21c0 .78.64 1.42 1.42 1.42a1.419 1.419 0 1 0-1.42-1.42Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLockGlyphSecondary;
