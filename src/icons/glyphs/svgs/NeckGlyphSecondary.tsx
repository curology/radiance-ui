import * as React from 'react';

function SvgNeckGlyphSecondary(props: React.SVGProps<SVGSVGElement>) {
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
        d="M39.25 30.02h-3.59c-3.64 0-5.19-1.41-5.19-4.72v-7.55c0-.41-.34-.75-.75-.75s-.75.34-.75.75v7.55c0 4.13 2.25 6.22 6.69 6.22h3.59c.41 0 .75-.34.75-.75s-.34-.75-.75-.75zM18.28 17c-.41 0-.75.34-.75.75v7.55c0 3.31-1.55 4.72-5.19 4.72H8.75c-.41 0-.75.34-.75.75s.34.75.75.75h3.59c4.44 0 6.69-2.09 6.69-6.22v-7.55c0-.41-.34-.75-.75-.75z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgNeckGlyphSecondary;
