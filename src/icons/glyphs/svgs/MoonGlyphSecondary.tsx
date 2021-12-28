import * as React from 'react';
import { SVGProps } from 'react';

function SvgMoonGlyphSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Moon Glyph</title>
      <path
        d="M13.57 28.43c-2.882-7.036.59-15.116 7.027-17.67 2.647-1.05 5.308-1.29 8-.715-5.5 1.925-8.641 5.633-9.323 11.068a.75.75 0 1 0 1.489.186c.695-5.547 4.198-9.021 10.658-10.505.72-.166.793-1.163.104-1.43-3.862-1.498-7.702-1.498-11.481.002-7.211 2.86-11.061 11.821-7.862 19.632 2.87 7.003 11.56 11.041 19.863 7.304.708-.319.525-1.371-.25-1.431-5.927-.464-9.806-4.407-10.737-9.58a.75.75 0 0 0-1.476.265c.884 4.91 4.165 8.869 9.17 10.292-6.599 1.559-12.926-1.912-15.182-7.419Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMoonGlyphSecondary;
