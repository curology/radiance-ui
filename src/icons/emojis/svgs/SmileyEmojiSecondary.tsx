import * as React from 'react';
import { SVGProps } from 'react';

function SvgSmileyEmojiSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Smiley Emoji</title>
      <path
        d="M23.93 33.08C23.85 33.08 23.77 33.08 23.69 33.08C20.63 32.98 18.16 31.04 17.39 28.14C17.28 27.74 17.52 27.33 17.92 27.22C18.32 27.11 18.73 27.35 18.84 27.76C19.43 30 21.35 31.5 23.73 31.58C25.7 31.65 28.18 30.66 29.17 27.71C29.3 27.32 29.72 27.11 30.12 27.24C30.51 27.37 30.72 27.8 30.59 28.19C29.59 31.18 26.99 33.08 23.93 33.08Z"
        fill="currentColor"
      />
      <path
        d="M24 40C15.18 40 8 32.82 8 24C8 15.18 15.18 8 24 8C32.82 8 40 15.18 40 24C40 32.82 32.82 40 24 40ZM24 9.5C16 9.5 9.5 16 9.5 24C9.5 32 16 38.5 24 38.5C32 38.5 38.5 32 38.5 24C38.5 16 32 9.5 24 9.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSmileyEmojiSecondary;
