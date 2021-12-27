import * as React from 'react';
import { SVGProps } from 'react';

function SvgLockGlyphSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Lock Glyph</title>
      <path
        d="M34.25 21.96C33.84 21.96 33.5 22.3 33.5 22.71V37.35C33.5 37.98 32.99 38.5 32.35 38.5H16.65C16.02 38.5 15.5 37.98 15.5 37.35V23.46H31.18C31.59 23.46 31.93 23.12 31.93 22.71V16.62C31.93 11.14 29.22 8 24.5 8C19.92 8 17.07 11.22 17.07 16.41V19.85C17.07 20.26 17.41 20.6 17.82 20.6C18.23 20.6 18.57 20.26 18.57 19.85V16.41C18.57 12.02 20.73 9.5 24.5 9.5C28.38 9.5 30.43 11.96 30.43 16.62V21.96H14.75C14.34 21.96 14 22.3 14 22.71V37.35C14 38.81 15.19 40 16.65 40H32.36C33.82 40 35.01 38.81 35.01 37.35V22.71C35 22.3 34.66 21.96 34.25 21.96Z"
        fill="currentColor"
      />
      <path
        d="M28.78 35.21C28.78 35.99 29.42 36.63 30.2 36.63C30.98 36.63 31.62 35.99 31.62 35.21C31.62 34.42 30.98 33.79 30.2 33.79C29.42 33.79 28.78 34.43 28.78 35.21Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLockGlyphSecondary;
