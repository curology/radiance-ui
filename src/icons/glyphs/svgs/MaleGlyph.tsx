import * as React from 'react';
import { SVGProps } from 'react';

function SvgMaleGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Male Glyph</title>
      <path
        d="M36.04 19.6801H37.29V12.6201L36.66 12.0001L29.62 12.0101V13.2601L35.15 13.2501L29.59 18.8201C27.65 17.1001 25.19 16.1501 22.58 16.1501C16.75 16.1501 12 20.9001 12 26.7301C12 32.5601 16.75 37.3101 22.58 37.3101C28.42 37.3101 33.16 32.5601 33.16 26.7301C33.16 24.1101 32.2 21.6401 30.47 19.7001L36.03 14.1301L36.04 19.6801ZM22.58 36.0701C17.43 36.0701 13.25 31.8801 13.25 26.7401C13.25 21.6001 17.44 17.4001 22.58 17.4001C25.07 17.4001 27.42 18.3701 29.18 20.1301C30.94 21.8901 31.91 24.2401 31.91 26.7301C31.92 31.8801 27.73 36.0701 22.58 36.0701Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMaleGlyph;
