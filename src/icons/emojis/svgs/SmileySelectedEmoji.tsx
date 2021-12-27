import * as React from 'react';
import { SVGProps } from 'react';

function SvgSmileySelectedEmoji(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Smiley Selected Emoji</title>
      <path
        d="M24 8C15.16 8 8 15.16 8 24C8 32.84 15.16 40 24 40C32.84 40 40 32.84 40 24C40 15.16 32.84 8 24 8ZM16.87 23.14C16.22 23.14 15.69 22.61 15.69 21.96C15.69 21.31 16.22 20.78 16.87 20.78C17.52 20.78 18.05 21.31 18.05 21.96C18.05 22.61 17.53 23.14 16.87 23.14ZM23.93 29.3C21.18 29.3 18.69 27.56 17.74 24.97L18.91 24.54C19.68 26.64 21.7 28.05 23.93 28.05C26.16 28.05 28.18 26.64 28.95 24.54L30.12 24.97C29.18 27.56 26.69 29.3 23.93 29.3ZM31.36 23.14C30.71 23.14 30.18 22.61 30.18 21.96C30.18 21.31 30.71 20.78 31.36 20.78C32.01 20.78 32.54 21.31 32.54 21.96C32.54 22.61 32.01 23.14 31.36 23.14Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSmileySelectedEmoji;
