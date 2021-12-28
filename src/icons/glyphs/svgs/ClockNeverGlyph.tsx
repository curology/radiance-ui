import * as React from 'react';
import { SVGProps } from 'react';

function SvgClockNeverGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Clock - Never Glyph</title>
      <path
        d="M29.064 12.2V8h-9.715v4.28C13.904 14.304 10 19.542 10 25.69 10 33.586 16.424 40 24.31 40s14.31-6.424 14.31-14.31c.01-6.236-3.992-11.533-9.556-13.49Zm-8.48-2.965h7.244v2.59a14.225 14.225 0 0 0-3.508-.455c-1.295 0-2.54.188-3.736.514V9.235Zm3.736 29.53c-7.214 0-13.075-5.87-13.075-13.075a13.07 13.07 0 0 1 2.965-8.292l18.718 18.105a12.98 12.98 0 0 1-8.608 3.262Zm9.497-4.121L15.04 16.479a13.029 13.029 0 0 1 9.28-3.874c7.214 0 13.075 5.87 13.075 13.075 0 3.469-1.364 6.621-3.578 8.964Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgClockNeverGlyph;
