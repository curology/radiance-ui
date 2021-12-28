import * as React from 'react';
import { SVGProps } from 'react';

function SvgSmileIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.03 9.16a.753.753 0 0 0-.95.47c-.4 1.2-1.4 1.61-2.2 1.57-.73-.02-1.67-.44-1.96-1.53-.1-.4-.52-.64-.92-.53a.75.75 0 0 0-.53.92c.41 1.55 1.73 2.59 3.36 2.64h.13c1.63 0 3.01-1.01 3.54-2.6a.73.73 0 0 0-.47-.94Z"
        fill="currentColor"
      />
      <path
        d="M8 0C3.59 0 0 3.59 0 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8Zm0 14.5c-3.58 0-6.5-2.92-6.5-6.5S4.42 1.5 8 1.5s6.5 2.92 6.5 6.5-2.92 6.5-6.5 6.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSmileIconSecondary;
