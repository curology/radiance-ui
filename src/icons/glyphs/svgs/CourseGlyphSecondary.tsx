import * as React from 'react';
import { SVGProps } from 'react';

function SvgCourseGlyphSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Course Glyph</title>
      <path
        d="M39.76 38.7c-5.21-4.9-14.05-5.15-15.76-5.15-5.94 0-11.67 1.86-15.72 5.11-.32.26-.38.73-.12 1.05.15.2.37.29.59.29.16 0 .33-.05.47-.17 3.79-3.04 9.17-4.78 14.78-4.78 1.62 0 9.93.23 14.74 4.74.3.28.78.27 1.06-.03.28-.3.27-.77-.04-1.06ZM24 32.12c.41 0 .75-.34.75-.75V9.5h12.69l-3.12 3.12c-.29.29-.29.77 0 1.06l3.12 3.12h-10.7c-.41 0-.75.34-.75.75s.34.75.75.75h12.51c.3 0 .58-.18.69-.46.12-.28.05-.6-.16-.82l-3.88-3.87 3.87-3.87c.21-.21.28-.54.16-.82a.727.727 0 0 0-.68-.46H24c-.41 0-.75.34-.75.75v22.62c0 .41.34.75.75.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCourseGlyphSecondary;
