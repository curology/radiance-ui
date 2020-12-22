import * as React from 'react';

function SvgFirmnessGlyph(props: React.SVGProps<SVGSVGElement>) {
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
        d="M40 37.386H9.21a.878.878 0 01-.869-.714.882.882 0 01.538-.993l27.831-11.34H9.22a.878.878 0 01-.868-.713.881.881 0 01.538-.994l27.83-11.339H8V10h30.79c.434 0 .786.3.869.714a.882.882 0 01-.538.993L11.29 23.047h27.49c.434 0 .785.289.868.713a.875.875 0 01-.538.993l-27.83 11.34H40v1.293z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFirmnessGlyph;
