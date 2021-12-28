import * as React from 'react';
import { SVGProps } from 'react';

function SvgFemaleGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Female Glyph</title>
      <path
        d="M32.11 26.02c1.99-2.01 3.07-4.67 3.06-7.5-.02-2.83-1.13-5.48-3.14-7.47-2-1.97-4.64-3.05-7.44-3.05h-.06c-2.83.02-5.48 1.13-7.47 3.14a10.499 10.499 0 0 0-3.06 7.5 10.555 10.555 0 0 0 10 10.5v3.79h-5.02v1.29H24v5.77h1.16v-5.77h5.02v-1.29h-5.02v-3.79c2.63-.15 5.08-1.23 6.95-3.12Zm-16.86-7.38c-.01-2.49.94-4.84 2.7-6.61a9.257 9.257 0 0 1 6.58-2.77h.05c2.47 0 4.8.96 6.56 2.7a9.257 9.257 0 0 1 2.77 6.58c.01 2.49-.94 4.84-2.7 6.61a9.257 9.257 0 0 1-6.58 2.77h-.05c-2.47 0-4.8-.96-6.56-2.7a9.257 9.257 0 0 1-2.77-6.58Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFemaleGlyph;
