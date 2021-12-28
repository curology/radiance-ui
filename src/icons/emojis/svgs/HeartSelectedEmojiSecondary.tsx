import * as React from 'react';
import { SVGProps } from 'react';

function SvgHeartSelectedEmojiSecondary(props: SVGProps<SVGSVGElement>) {
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
        d="M32.63 8c-3.45 0-4.85 2.07-5.98 3.73-.93 1.37-1.51 2.14-2.65 2.14-1.44 0-2.03-.82-2.94-2.26C20.04 10 18.78 8 15.37 8 10.69 8 8 11.55 8 17.73c0 4.74 2.72 9.73 7.85 14.44 3.1 2.84 7.56 7.54 7.6 7.59.15.16.34.24.55.24.21 0 .4-.08.54-.23.06-.06 5.64-5.95 7.6-7.81l.39-.37C35.14 29.15 40 24.6 40 17.94 40 11.35 37.52 8 32.63 8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHeartSelectedEmojiSecondary;
