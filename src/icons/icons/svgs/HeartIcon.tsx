import * as React from 'react';
import { SVGProps } from 'react';

function SvgHeartIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M11.27 1.75c1.92 0 3.49 1.76 3.49 3.92 0 1.78-1.55 3.26-1.57 3.27l-.02.02-.02.02-4.83 4.88-5.51-4.93c-1.32-1.19-1.56-2-1.56-3.26 0-2.16 1.56-3.92 3.49-3.92.87 0 1.71.37 2.36 1.05l.9.94.9-.94c.66-.68 1.5-1.05 2.37-1.05Zm0-1.25c-1.27 0-2.41.55-3.26 1.43C7.16 1.05 6.02.5 4.75.5 2.13.5.01 2.81.01 5.67c0 1.73.46 2.83 1.97 4.19l6.4 5.73 5.66-5.73s1.97-1.82 1.97-4.19c0-2.86-2.12-5.17-4.74-5.17Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHeartIcon;
