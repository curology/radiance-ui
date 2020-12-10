import * as React from 'react';

function SvgSmileyEmojiSecondary(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23.93 33.08h-.24c-3.06-.1-5.53-2.04-6.3-4.94a.749.749 0 111.45-.38c.59 2.24 2.51 3.74 4.89 3.82 1.97.07 4.45-.92 5.44-3.87a.749.749 0 111.42.48c-1 2.99-3.6 4.89-6.66 4.89z"
        fill="currentColor"
      />
      <path
        d="M24 40c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm0-30.5C16 9.5 9.5 16 9.5 24S16 38.5 24 38.5 38.5 32 38.5 24 32 9.5 24 9.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSmileyEmojiSecondary;
