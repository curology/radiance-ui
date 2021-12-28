import * as React from 'react';
import { SVGProps } from 'react';

function SvgSmileySelectedEmojiSecondary(props: SVGProps<SVGSVGElement>) {
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
        d="M23.75 8C15.07 8 8 15.07 8 23.75S15.07 39.5 23.75 39.5 39.5 32.43 39.5 23.75 32.43 8 23.75 8Zm6.59 19.93c-1 3-3.6 4.9-6.66 4.9h-.24c-3.06-.1-5.53-2.04-6.3-4.94a.75.75 0 0 1 .53-.92c.4-.1.81.13.92.54.59 2.24 2.51 3.74 4.89 3.82 1.97.05 4.45-.92 5.44-3.87.13-.39.55-.61.95-.47.39.12.61.55.47.94Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSmileySelectedEmojiSecondary;
