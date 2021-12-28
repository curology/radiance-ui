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
      <path
        d="M33.58 40c-.41 0-.75-.34-.75-.75l.01-6.07c0-6.77-3.48-10.65-9.56-10.65h-3.59c-4.44-.01-6.69-2.1-6.69-6.23V8.75c0-.41.34-.75.75-.75s.75.34.75.75v7.55c0 3.31 1.55 4.72 5.19 4.72h3.59c6.92 0 11.06 4.54 11.06 12.15l-.01 6.07c0 .42-.34.76-.75.76Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgChestGlyphSecondary;
