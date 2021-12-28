import * as React from 'react';
import { SVGProps } from 'react';

function SvgPreparedEmojiSecondary(props: SVGProps<SVGSVGElement>) {
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
        d="M24 40c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16Zm0-30.5C16 9.5 9.5 16 9.5 24S16 38.5 24 38.5 38.5 32 38.5 24 32 9.5 24 9.5Z"
        fill="currentColor"
      />
      <path
        d="M23.9 32.88h-.21c-2.42-.05-4.66-.97-6.12-2.52-.28-.3-.27-.78.03-1.06.3-.29.78-.27 1.06.03 1.19 1.26 3.04 2.01 5.06 2.05 2.17.04 4.24-.71 5.63-2.08.3-.29.77-.28 1.06.01.29.3.28.77-.01 1.06-1.63 1.6-3.99 2.51-6.5 2.51Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPreparedEmojiSecondary;
