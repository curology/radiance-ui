import * as React from 'react';

function SvgMaleGlyph(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M36.04 19.68h1.25v-7.06l-.63-.62-7.04.01v1.25l5.53-.01-5.56 5.57c-1.94-1.72-4.4-2.67-7.01-2.67C16.75 16.15 12 20.9 12 26.73s4.75 10.58 10.58 10.58c5.84 0 10.58-4.75 10.58-10.58 0-2.62-.96-5.09-2.69-7.03l5.56-5.57.01 5.55zM22.58 36.07c-5.15 0-9.33-4.19-9.33-9.33s4.19-9.34 9.33-9.34c2.49 0 4.84.97 6.6 2.73a9.282 9.282 0 012.73 6.6c.01 5.15-4.18 9.34-9.33 9.34z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMaleGlyph;
