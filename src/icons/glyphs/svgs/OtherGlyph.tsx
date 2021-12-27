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
        d="M24.0098 18.04C24.5621 18.04 25.0098 17.5923 25.0098 17.04C25.0098 16.4878 24.5621 16.04 24.0098 16.04C23.4575 16.04 23.0098 16.4878 23.0098 17.04C23.0098 17.5923 23.4575 18.04 24.0098 18.04ZM24.0098 25.04C24.5621 25.04 25.0098 24.5923 25.0098 24.04C25.0098 23.4878 24.5621 23.04 24.0098 23.04C23.4575 23.04 23.0098 23.4878 23.0098 24.04C23.0098 24.5923 23.4575 25.04 24.0098 25.04ZM25.0098 31.04C25.0098 31.5923 24.5621 32.04 24.0098 32.04C23.4575 32.04 23.0098 31.5923 23.0098 31.04C23.0098 30.4878 23.4575 30.04 24.0098 30.04C24.5621 30.04 25.0098 30.4878 25.0098 31.04Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgOtherGlyph;
