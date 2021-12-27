import * as React from 'react';
import { SVGProps } from 'react';

function SvgNeckGlyphSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Neck Glyph</title>
      <path
        d="M39.25 30.02H35.66C32.02 30.02 30.47 28.61 30.47 25.3V17.75C30.47 17.34 30.13 17 29.72 17C29.31 17 28.97 17.34 28.97 17.75V25.3C28.97 29.43 31.22 31.52 35.66 31.52H39.25C39.66 31.52 40 31.18 40 30.77C40 30.36 39.66 30.02 39.25 30.02Z"
        fill="currentColor"
      />
      <path
        d="M18.28 17C17.87 17 17.53 17.34 17.53 17.75V25.3C17.53 28.61 15.98 30.02 12.34 30.02H8.75C8.34 30.02 8 30.36 8 30.77C8 31.18 8.34 31.52 8.75 31.52H12.34C16.78 31.52 19.03 29.43 19.03 25.3V17.75C19.03 17.34 18.69 17 18.28 17Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgNeckGlyphSecondary;
