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
        d="M18.4999 36.8401L10.1099 28.4601L10.9999 27.5701L18.4099 34.9901L37.2799 12.3301L38.2399 13.1201L18.4999 36.8401Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgYesGlyph;
