import * as React from 'react';
import { SVGProps } from 'react';

function SvgMortorGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Mortor Glyph</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.1768 10.8057C32.781 9.59016 30.5615 9.76988 29.3548 11.1424L19.0086 22.9464H8C8 31.7499 15.1545 38.8705 24 38.8705C32.8455 38.9999 40 31.7499 40 22.9464H28.2103L34.5189 15.5852C35.732 14.2004 35.5528 12.0039 34.1768 10.8057ZM26.0258 22.9464L33.2572 14.5084C33.8611 13.8215 33.7792 12.6552 33.0752 12.0422C32.39 11.4454 31.2279 11.5244 30.6133 12.2226L21.214 22.9464H26.0258ZM24 37.3169C31.4146 37.3169 37.5285 31.7499 38.3089 24.6294H20.6179H9.69106C10.4715 31.7499 16.5854 37.3169 24 37.3169Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMortorGlyph;
