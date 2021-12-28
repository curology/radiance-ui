import * as React from 'react';
import { SVGProps } from 'react';

function SvgShuffleIcon(props: SVGProps<SVGSVGElement>) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="m13.52 5.23-.97.97.88.88 2.58-2.59L13.57 2l-.89.88 1.06 1.09c-3.52.25-5.2 2.27-6.79 4.24-.52.64-1.06 1.3-1.66 1.91-2.16 2.17-5.25 2.2-5.28 2.2v1.25c.16 0 3.63-.03 6.16-2.57.586-.586 1.09-1.205 1.58-1.804L7.91 9l.005-.006C9.433 7.146 10.753 5.54 13.52 5.23ZM6.01 6.89l.15.16c.14.148.256.27.36.36l.85-.92c-.11-.1-.245-.243-.405-.412L6.92 6.03c-.34-.37-.82-.87-1.46-1.46C3.36 2.64.18 2.58.04 2.58L.02 3.83c.03 0 2.85.06 4.59 1.66.602.554 1.044 1.022 1.371 1.37l.029.03Zm7.65 3.89-.97-.99.89-.87 2.44 2.49L13.44 14l-.88-.88 1.08-1.08c-2.26-.22-4.25-1.26-5.31-2.29l.87-.9c.67.65 2.3 1.7 4.46 1.93Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgShuffleIcon;
