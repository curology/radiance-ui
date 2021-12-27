import * as React from 'react';
import { SVGProps } from 'react';

function SvgUnsatisfiedSelectedEmoji(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Unsatisfied Selected Emoji</title>
      <path
        d="M24 8C15.16 8 8 15.16 8 24C8 32.84 15.16 40 24 40C32.84 40 40 32.84 40 24C40 15.16 32.84 8 24 8ZM16.88 28.14C16.23 28.14 15.7 27.61 15.7 26.96C15.7 26.31 16.23 25.78 16.88 25.78C17.53 25.78 18.06 26.31 18.06 26.96C18.06 27.61 17.53 28.14 16.88 28.14ZM27.49 32.57C27.2 32.19 26.09 30.97 24.01 30.97C22.05 30.97 20.92 32.1 20.52 32.58L19.55 31.79C20.06 31.17 21.51 29.72 24.01 29.72C26.66 29.72 28.1 31.31 28.48 31.8L27.49 32.57ZM31.36 28.14C30.71 28.14 30.18 27.61 30.18 26.96C30.18 26.31 30.71 25.78 31.36 25.78C32.01 25.78 32.54 26.31 32.54 26.96C32.54 27.61 32.02 28.14 31.36 28.14Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgUnsatisfiedSelectedEmoji;
