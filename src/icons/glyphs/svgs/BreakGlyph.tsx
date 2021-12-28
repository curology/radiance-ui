import * as React from 'react';
import { SVGProps } from 'react';

function SvgBreakGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Break Glyph</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.07 9c2.41 0 4.37 1.96 4.37 4.37h4.49V39.21H8V13.37h2.99c0-2.41 1.97-4.37 4.38-4.37s4.37 1.96 4.37 4.37h6.96c0-2.41 1.96-4.37 4.37-4.37Zm0 1.25c-1.72 0-3.12 1.4-3.12 3.12h6.24c0-1.72-1.4-3.12-3.12-3.12Zm-15.71 0c-1.72 0-3.12 1.4-3.12 3.12h6.24c0-1.72-1.4-3.12-3.12-3.12ZM9.25 37.97h29.43V20.41H9.25v17.56Zm0-18.84h29.41v-4.5h-3.43a4.332 4.332 0 0 1-2.84 2.91l-.38-1.19c.88-.28 1.55-.92 1.9-1.72H19.54a4.332 4.332 0 0 1-2.84 2.91l-.38-1.19c.88-.28 1.55-.92 1.9-1.72H9.25v4.5Zm16.32 12.04.88.89 1.78-1.78L30 32.03l.88-.89-1.76-1.75 1.76-1.76-.88-.89-1.77 1.77-1.79-1.78-.89.88 1.79 1.78-1.77 1.78Zm-2.66-3.54-.88-.88-3.55 3.55-1.2-1.19-.88.88 2.08 2.08 4.43-4.44Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBreakGlyph;
