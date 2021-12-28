import * as React from 'react';
import { SVGProps } from 'react';

function SvgTimeNeverGlyphSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Time - Never Glyph</title>
      <path
        d="M32.96 39h-17.2c-.41 0-.75-.34-.75-.75v-6.52c0-5.22 3.38-8.04 6.55-8.04.58 0 .78-.37.78-.7 0-.16-.05-.31-.15-.41-.11-.12-.29-.18-.54-.18-2.76 0-6.65-2.59-6.65-8.34V7.75c0-.41.34-.75.75-.75h17.2c.41 0 .75.34.75.75v6.31c0 6.16-3.62 8.34-6.71 8.34-.57 0-.61.48-.61.63 0 .11.03.66.65.66 3.75 0 6.69 3.53 6.69 8.04v6.52c-.01.41-.34.75-.76.75Zm-16.45-1.5h15.7v-5.77c0-3.67-2.28-6.54-5.19-6.54-.64 0-1.22-.25-1.61-.7-.35-.39-.54-.92-.54-1.47 0-1.06.73-2.13 2.11-2.13 3.26 0 5.21-2.56 5.21-6.84V8.5H16.5v5.56c0 4.72 3.01 6.84 5.15 6.84.84 0 1.35.35 1.64.65.37.38.57.89.57 1.45 0 1.06-.8 2.2-2.28 2.2-2.45 0-5.05 2.29-5.05 6.54v5.76h-.02Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTimeNeverGlyphSecondary;
