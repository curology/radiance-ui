import * as React from 'react';
import { SVGProps } from 'react';

function SvgCheckBadgeGlyph(props: SVGProps<SVGSVGElement>) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 8H33.004v23.259H29.06v8.551l-1-.748-4.51-3.374-4.922 3.588-.993.724v-8.74H14V8Zm4.884 23.26h8.925v6.054l-3.88-2.903-.37-.277-.373.272-4.302 3.136v-6.283ZM15.25 9.25v20.76h16.504V9.25H15.25Zm7.507 13.579 3.738-3.86-.898-.869-3.295 3.402-1.316-1.322-.886.882 1.765 1.773.45.451.442-.457Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCheckBadgeGlyph;
