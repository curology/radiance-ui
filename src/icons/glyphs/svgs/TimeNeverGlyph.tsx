import * as React from 'react';
import { SVGProps } from 'react';

function SvgTimeNeverGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Time - Never Glyph</title>
      <path
        d="M35.5 12.629C35.5 10.076 33.536 8 31.12 8c-2.415 0-4.379 2.076-4.379 4.629h1.253c0-1.822 1.403-3.305 3.127-3.305 1.723 0 3.126 1.483 3.126 3.305H19.766C19.766 10.076 17.8 8 15.386 8s-4.39 2.076-4.39 4.629h1.253c0-1.822 1.403-3.305 3.127-3.305 1.724 0 3.127 1.483 3.127 3.305H8V40h32V12.629h-4.5Zm3.247 26.058H9.253V20.076h29.494v18.61Zm0-19.967H9.253v-4.767h8.99c-.351.847-1.023 1.525-1.905 1.822l.381 1.26c1.403-.476 2.445-1.641 2.846-3.082h14.402c-.351.847-1.022 1.525-1.904 1.822l.38 1.26c1.404-.476 2.446-1.641 2.847-3.082h3.437v4.767h.02Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTimeNeverGlyph;
