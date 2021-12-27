import * as React from 'react';
import { SVGProps } from 'react';

function SvgClockSometimesGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Clock - Sometimes Glyph</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.0636 8V12.2001C34.6275 14.1569 38.63 19.454 38.6201 25.6899C38.6201 33.5763 32.2063 40 24.31 40C16.4237 40 10 33.5862 10 25.6899C10 19.5429 13.9036 14.3051 19.349 12.2792V8H29.0636ZM27.8283 9.23533H20.5843V11.8839C21.7801 11.5578 23.0253 11.37 24.3199 11.37C25.5256 11.37 26.7016 11.538 27.8283 11.8246V9.23533ZM11.2353 25.6899C11.2353 32.8944 17.0957 38.7647 24.31 38.7647C31.5244 38.7647 37.3848 32.8944 37.3848 25.6899C37.3848 18.4855 31.5145 12.6152 24.31 12.6152C17.1056 12.6152 11.2353 18.4855 11.2353 25.6899ZM19.112 22.1576L19.9709 21.2697L29.8294 30.8072L28.9705 31.6951L19.112 22.1576Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgClockSometimesGlyph;
