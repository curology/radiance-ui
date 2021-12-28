import * as React from 'react';
import { SVGProps } from 'react';

function SvgOverwhelmedSelectedEmoji(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Overwhelmed Selected Emoji</title>
      <path
        d="M39.23 19.11c.43-.56.7-1.26.7-2.03 0-1.63-2.37-4.86-2.84-5.5l-.5-.66-.5.66c-.14.18-.43.58-.78 1.1A15.946 15.946 0 0 0 24 8C15.16 8 8 15.16 8 24s7.16 16 16 16 16-7.16 16-16c0-1.7-.27-3.35-.77-4.89ZM12.8 24.47l3.55-2.21.66 1.06-3.56 2.21-.65-1.06Zm4.76 3.95c-.21-.64-.8-1.08-1.48-1.08-.62 0-1.19.37-1.43.95l-1.15-.49a2.793 2.793 0 0 1 2.58-1.71c1.22 0 2.29.78 2.67 1.94l-1.19.39Zm15.04-.13c-.24-.58-.8-.95-1.43-.95-.68 0-1.27.43-1.48 1.08l-1.19-.38a2.794 2.794 0 0 1 2.67-1.95c1.13 0 2.14.67 2.58 1.71l-1.15.49Zm1.21-2.76-3.55-2.21.66-1.06 3.55 2.21-.66 1.06Zm2.78-6.35c-1.16 0-2.1-.94-2.1-2.09 0-.79 1.14-2.68 2.1-4.05.99 1.42 2.09 3.29 2.09 4.05 0 1.15-.94 2.09-2.09 2.09Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgOverwhelmedSelectedEmoji;
