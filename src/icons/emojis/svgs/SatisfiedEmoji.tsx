import * as React from 'react';
import { SVGProps } from 'react';

function SvgSatisfiedEmoji(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Satisfied Emoji</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.75 24c0-8.13-6.62-14.75-14.75-14.75-8.13 0-14.75 6.62-14.75 14.75 0 8.13 6.62 14.75 14.75 14.75 8.13 0 14.75-6.62 14.75-14.75ZM8 24c0-8.84 7.16-16 16-16s16 7.17 16 16c0 8.84-7.16 16-16 16S8 32.84 8 24Zm16.01 7.57c1.96 0 3.09-1.13 3.49-1.61l.97.79c-.51.62-1.96 2.07-4.46 2.07-2.65 0-4.09-1.59-4.47-2.08l.99-.77c.29.38 1.4 1.6 3.48 1.6Zm-6.08-3.15c-.21-.64-.8-1.08-1.48-1.08-.62 0-1.19.37-1.43.95l-1.15-.49a2.793 2.793 0 0 1 2.58-1.71 2.8 2.8 0 0 1 2.67 1.95l-1.19.38Zm10.95-.38 1.19.38c.21-.65.8-1.08 1.48-1.08.63 0 1.19.37 1.43.95l1.15-.49a2.793 2.793 0 0 0-2.58-1.71c-1.23 0-2.3.79-2.67 1.95Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSatisfiedEmoji;
