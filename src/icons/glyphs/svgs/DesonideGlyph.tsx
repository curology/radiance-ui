import * as React from 'react';
import { SVGProps } from 'react';

function SvgDesonideGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Desonide Glyph</title>
      <path
        d="M22.04 23.62c-.01 2.07-1.42 3.49-3.63 3.48l-2.62-.01.03-7 2.62.01c2.2.02 3.61 1.45 3.6 3.52Zm-4.86-2.24-.02 4.44h1.25c1.39.01 2.19-.8 2.2-2.21.01-1.4-.78-2.22-2.18-2.23h-1.25ZM28.57 24.6l-4.75-5.5 3.53-3.04 4.74 5.51-3.52 3.03Zm-2.98-5.37 3.11 3.61 1.64-1.41-3.11-3.61-1.64 1.41Z"
        fill="currentColor"
      />
      <path
        d="M8 23.02 17 10l15.8 1.05 6.9 14.48-8.95 13.15-15.94-1.23L8 23.02Zm7.66 13.26 14.52 1.12 8.15-11.98-6.28-13.18-14.39-.96-8.2 11.86 6.2 13.14Z"
        fill="currentColor"
      />
      <path
        d="m25.56 32.79-1.72-2.64 1.42-2.81 3.14-.17 1.72 2.64-1.42 2.81-3.14.17Zm-.28-2.71.93 1.43 1.7-.09.77-1.52-.93-1.43-1.7.09-.77 1.52Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDesonideGlyph;
