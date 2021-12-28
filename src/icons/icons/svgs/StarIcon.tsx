import * as React from 'react';
import { SVGProps } from 'react';

function SvgStarIcon(props: SVGProps<SVGSVGElement>) {
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
        d="m8.01 2.89 1.35 2.74.29.59.65.09 3.02.44-2.19 2.13-.47.46.11.65.52 3.01-2.7-1.42-.58-.31-.58.31L4.72 13l.52-3.01.11-.65-.47-.46-2.19-2.13 3.02-.44.65-.09.29-.59 1.36-2.74Zm0-2.82L5.54 5.08l-5.53.8 4 3.9-.94 5.51 4.94-2.6 4.94 2.6-.94-5.51 4-3.9-5.53-.8L8.01.07Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgStarIcon;
