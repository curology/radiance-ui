import * as React from 'react';
import { SVGProps } from 'react';

function SvgSunGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Sun Glyph</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.875 10.52c.69 0 1.25-.564 1.25-1.26 0-.696-.56-1.26-1.25-1.26s-1.25.564-1.25 1.26c0 .696.56 1.26 1.25 1.26Zm0 29.48c.69 0 1.25-.564 1.25-1.26 0-.696-.56-1.26-1.25-1.26s-1.25.564-1.25 1.26c0 .696.56 1.26 1.25 1.26ZM35.5 13.543c0 .696-.56 1.26-1.25 1.26S33 14.24 33 13.543c0-.695.56-1.26 1.25-1.26s1.25.565 1.25 1.26Zm-22 22.174c.69 0 1.25-.564 1.25-1.26 0-.696-.56-1.26-1.25-1.26s-1.25.564-1.25 1.26c0 .696.56 1.26 1.25 1.26ZM40 24c0 .696-.56 1.26-1.25 1.26S37.5 24.696 37.5 24c0-.696.56-1.26 1.25-1.26S40 23.304 40 24ZM9.25 25.26c.69 0 1.25-.564 1.25-1.26 0-.696-.56-1.26-1.25-1.26S8 23.304 8 24c0 .696.56 1.26 1.25 1.26Zm26.25 9.197c0 .696-.56 1.26-1.25 1.26S33 35.153 33 34.457c0-.696.56-1.26 1.25-1.26s1.25.564 1.25 1.26Zm-22-19.654c.69 0 1.25-.564 1.25-1.26 0-.695-.56-1.26-1.25-1.26s-1.25.565-1.25 1.26c0 .696.56 1.26 1.25 1.26ZM32 24c0-4.535-3.625-8.189-8.125-8.189S15.75 19.465 15.75 24s3.625 8.189 8.125 8.189S32 28.535 32 24Zm-17.75 0c0-5.417 4.25-9.7 9.625-9.7 5.25 0 9.625 4.283 9.625 9.7 0 5.291-4.25 9.7-9.625 9.7-5.25 0-9.625-4.283-9.625-9.7Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSunGlyph;
