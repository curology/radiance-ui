import * as React from 'react';
import { SVGProps } from 'react';

function SvgYesGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Yes Glyph</title>
      <path
        d="m18.5 36.84-8.39-8.38.89-.89 7.41 7.42 18.87-22.66.96.79L18.5 36.84Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgYesGlyph;
