import * as React from 'react';
import { SVGProps } from 'react';

function SvgConfusedSelectedEmoji(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Confused Selected Emoji</title>
      <path
        d="M24 8C15.16 8 8 15.16 8 24s7.16 16 16 16 16-7.16 16-16S32.84 8 24 8Zm-7.13 16.14c-.65 0-1.18-.53-1.18-1.18 0-.65.53-1.18 1.18-1.18.65 0 1.18.53 1.18 1.18 0 .65-.52 1.18-1.18 1.18Zm1.37-6.02a1.46 1.46 0 0 0-1.12-.51c-.82 0-1.49.67-1.49 1.49h-1c0-1.37 1.12-2.49 2.49-2.49.72 0 1.4.31 1.88.86l-.76.65Zm6.01 11.63c-1.63 0-2.91-.9-2.91-2.04 0-1.14 1.28-2.04 2.91-2.04 1.63 0 2.91.9 2.91 2.04 0 1.14-1.28 2.04-2.91 2.04Zm7.11-5.61c-.65 0-1.18-.53-1.18-1.18 0-.65.53-1.18 1.18-1.18.65 0 1.18.53 1.18 1.18 0 .65-.53 1.18-1.18 1.18Zm1.81-3.43h-3.62v-1.25h3.62v1.25Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgConfusedSelectedEmoji;
