import * as React from 'react';
import { SVGProps } from 'react';

function SvgSunblockGlyph(props: SVGProps<SVGSVGElement>) {
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
        d="M38.381 38.381V9.494H9.494v28.887h28.887ZM8 8h32v32H8V8Zm20.67 15.938a4.73 4.73 0 0 0-4.732-4.732c-2.615 0-4.732 2.242-4.732 4.856 0 2.615 2.117 4.607 4.732 4.607a4.73 4.73 0 0 0 4.731-4.731Zm-11.083.124c0-3.486 2.864-6.35 6.35-6.35 3.612 0 6.35 2.864 6.35 6.35 0 3.487-2.863 6.35-6.35 6.35-3.486 0-6.35-2.863-6.35-6.35Zm5.726-8.965v-2.365h1.25v2.365h-1.25Zm0 17.806v2.49h1.25v-2.49h-1.25Zm6.55-15.649 1.743-1.619.85.916-1.743 1.62-.85-.917ZM17.27 29.846l-1.743 1.743.884.884 1.743-1.743-.884-.884Zm15.633-6.409h2.366v1.25h-2.366v-1.25Zm-17.806 0h-2.365v1.25h2.365v-1.25Zm15.633 6.409 1.743 1.743-.884.884-1.743-1.743.884-.884ZM18.137 17.254l-1.743-1.619-.85.916 1.743 1.62.85-.917Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSunblockGlyph;
