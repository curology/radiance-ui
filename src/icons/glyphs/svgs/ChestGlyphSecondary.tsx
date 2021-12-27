import * as React from 'react';
import { SVGProps } from 'react';

function SvgChestGlyphSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Chest Glyph</title>
      <path
        d="M33.58 40C33.17 40 32.83 39.66 32.83 39.25L32.84 33.18C32.84 26.41 29.36 22.53 23.28 22.53H19.69C15.25 22.52 13 20.43 13 16.3V8.75C13 8.34 13.34 8 13.75 8C14.16 8 14.5 8.34 14.5 8.75V16.3C14.5 19.61 16.05 21.02 19.69 21.02H23.28C30.2 21.02 34.34 25.56 34.34 33.17L34.33 39.24C34.33 39.66 33.99 40 33.58 40Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgChestGlyphSecondary;
