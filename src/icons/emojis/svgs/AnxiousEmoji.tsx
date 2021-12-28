import * as React from 'react';
import { SVGProps } from 'react';

function SvgAnxiousEmoji(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Anxious Emoji</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m28.086 3-2.267 2.809.972.785 2.268-2.809L28.086 3Zm-8.643.789.973-.785 2.266 2.81-.973.785-2.266-2.81ZM12.786 19.04l3.552-2.204.659 1.062-3.552 2.204-.66-1.063Zm17.47-1.14.66-1.062 3.552 2.205-.66 1.062-3.551-2.205Zm1.104 6.235a1.18 1.18 0 1 0 0-2.36 1.18 1.18 0 0 0 0 2.36Zm-13.31-1.18a1.18 1.18 0 1 1-2.36 0 1.18 1.18 0 0 1 2.36 0Zm6.2 6.8c-1.63 0-2.91-.9-2.91-2.04 0-1.14 1.28-2.04 2.91-2.04 1.63 0 2.91.9 2.91 2.04 0 1.14-1.28 2.04-2.91 2.04Zm0-3.08c-1.13 0-1.91.55-1.91 1.04s.78 1.04 1.91 1.04 1.91-.55 1.91-1.04-.78-1.04-1.91-1.04Zm14.5-2.68c0-8.132-6.62-14.753-14.75-14.753-8.13 0-14.75 6.621-14.75 14.753S15.87 38.75 24 38.75c8.13 0 14.75-6.622 14.75-14.754Zm-30.75 0c0-8.842 7.16-16.004 16-16.004s16 7.172 16 16.004C40 32.838 32.84 40 24 40S8 32.838 8 23.996Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgAnxiousEmoji;
