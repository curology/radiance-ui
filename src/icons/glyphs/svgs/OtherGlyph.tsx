import * as React from 'react';
import { SVGProps } from 'react';

function SvgOtherGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Other Glyph</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.01 18.04a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgOtherGlyph;
