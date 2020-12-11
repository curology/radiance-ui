import * as React from 'react';

function SvgOtherGlyph(props: React.SVGProps<SVGSVGElement>) {
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
        d="M24.01 18.04a1 1 0 100-2 1 1 0 000 2zm0 7a1 1 0 100-2 1 1 0 000 2zm1 6a1 1 0 11-2 0 1 1 0 012 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgOtherGlyph;
