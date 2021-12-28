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
      <path
        d="M24 8C15.2 8 8 15.2 8 24s7.2 16 16 16 16-7.2 16-16S32.8 8 24 8Zm0 1.2c3.8 0 7.3 1.5 9.9 3.9L13.1 33.9c-2.4-2.6-3.9-6.1-3.9-9.9 0-8.1 6.7-14.8 14.8-14.8Zm0 29.6c-3.8 0-7.3-1.5-10-3.9L34.8 14c2.4 2.6 3.9 6.1 3.9 10 .1 8.1-6.6 14.8-14.7 14.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgNoneGlyph;
