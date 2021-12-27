import * as React from 'react';
import { SVGProps } from 'react';

function SvgNoneGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>None Glyph</title>
      <path
        d="M24 8C15.2 8 8 15.2 8 24C8 32.8 15.2 40 24 40C32.8 40 40 32.8 40 24C40 15.2 32.8 8 24 8ZM24 9.2C27.8 9.2 31.3 10.7 33.9 13.1L13.1 33.9C10.7 31.3 9.2 27.8 9.2 24C9.2 15.9 15.9 9.2 24 9.2ZM24 38.8C20.2 38.8 16.7 37.3 14 34.9L34.8 14C37.2 16.6 38.7 20.1 38.7 24C38.8 32.1 32.1 38.8 24 38.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgNoneGlyph;
