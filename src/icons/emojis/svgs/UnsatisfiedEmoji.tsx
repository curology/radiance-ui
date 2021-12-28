import * as React from 'react';
import { SVGProps } from 'react';

function SvgUnsatisfiedEmoji(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Unsatisfied Emoji</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 9.25c8.13 0 14.75 6.62 14.75 14.75 0 8.13-6.62 14.75-14.75 14.75-8.13 0-14.75-6.62-14.75-14.75 0-8.13 6.62-14.75 14.75-14.75ZM24 8C15.16 8 8 15.16 8 24s7.16 16 16 16 16-7.16 16-16c0-8.83-7.16-16-16-16Zm7.36 20.14a1.18 1.18 0 1 0 0-2.36 1.18 1.18 0 0 0 0 2.36Zm-13.3-1.18a1.18 1.18 0 1 1-2.36 0 1.18 1.18 0 0 1 2.36 0Zm9.43 5.62c-.29-.37-1.4-1.6-3.48-1.6-1.96 0-3.1 1.13-3.49 1.61l-.97-.79c.51-.62 1.96-2.07 4.46-2.07 2.65 0 4.09 1.59 4.47 2.08l-.99.77Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgUnsatisfiedEmoji;
