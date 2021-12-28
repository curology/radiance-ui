import * as React from 'react';
import { SVGProps } from 'react';

function SvgUnsatisfiedSelectedEmoji(props: SVGProps<SVGSVGElement>) {
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
        d="M24 8C15.16 8 8 15.16 8 24s7.16 16 16 16 16-7.16 16-16S32.84 8 24 8Zm-7.12 20.14c-.65 0-1.18-.53-1.18-1.18 0-.65.53-1.18 1.18-1.18.65 0 1.18.53 1.18 1.18 0 .65-.53 1.18-1.18 1.18Zm10.61 4.43c-.29-.38-1.4-1.6-3.48-1.6-1.96 0-3.09 1.13-3.49 1.61l-.97-.79c.51-.62 1.96-2.07 4.46-2.07 2.65 0 4.09 1.59 4.47 2.08l-.99.77Zm3.87-4.43c-.65 0-1.18-.53-1.18-1.18 0-.65.53-1.18 1.18-1.18.65 0 1.18.53 1.18 1.18 0 .65-.52 1.18-1.18 1.18Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgUnsatisfiedSelectedEmoji;
