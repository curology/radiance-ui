import * as React from 'react';
import { SVGProps } from 'react';

function SvgConsultHistoryGlyph(props: SVGProps<SVGSVGElement>) {
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
        d="M34.04 14.59h-3.8v-1.98c0-1.06-.86-1.92-1.92-1.92h-2.48V8H14.4v2.69h-2.48c-1.06 0-1.92.86-1.92 1.92v21.23c0 1.06.86 1.92 1.92 1.92h4.8v1.07c0 1.3 1.02 2.36 2.27 2.36h15.06c1.25 0 2.27-1.06 2.27-2.36V16.95c0-1.3-1.02-2.36-2.28-2.36ZM15.65 9.24h8.94V13h-8.94V9.24Zm-4.41 24.59V12.6c0-.37.3-.67.67-.67h2.48v2.32h11.44v-2.32h2.48c.37 0 .67.3.67.67v21.23c0 .37-.3.67-.67.67h-16.4a.664.664 0 0 1-.67-.67Zm23.83 3c0 .61-.46 1.11-1.02 1.11H18.99c-.56 0-1.02-.5-1.02-1.11v-1.07h10.36c1.06 0 1.92-.86 1.92-1.92v-18h3.8c.56 0 1.02.5 1.02 1.11v19.88Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgConsultHistoryGlyph;
