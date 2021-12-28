import * as React from 'react';
import { SVGProps } from 'react';

function SvgSatisfiedSelectedEmoji(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Satisfied Selected Emoji</title>
      <path
        d="M23.99 8.24c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16Zm-6.07 20.41c-.21-.64-.8-1.08-1.48-1.08-.62 0-1.19.37-1.43.95l-1.15-.49a2.793 2.793 0 0 1 2.58-1.71 2.8 2.8 0 0 1 2.67 1.95l-1.19.38Zm6.08 4.4c-2.65 0-4.09-1.59-4.47-2.08l.99-.77c.29.38 1.4 1.6 3.48 1.6 1.96 0 3.09-1.13 3.49-1.61l.97.79c-.51.63-1.97 2.07-4.46 2.07Zm8.97-4.53c-.24-.58-.8-.95-1.43-.95-.68 0-1.27.43-1.48 1.08l-1.19-.38a2.794 2.794 0 0 1 2.67-1.95c1.13 0 2.14.67 2.58 1.71l-1.15.49Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSatisfiedSelectedEmoji;
