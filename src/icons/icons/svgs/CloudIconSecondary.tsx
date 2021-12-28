import * as React from 'react';
import { SVGProps } from 'react';

function SvgCloudIconSecondary(props: SVGProps<SVGSVGElement>) {
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
        d="M14.58 5.6c-.95-.73-2.25-.97-3.49-.64-.4.11-.64.52-.54.92.11.4.52.64.92.54.79-.21 1.62-.07 2.2.38.54.42.83 1.08.83 1.9 0 1.64-1.23 2.66-3.21 2.66H5.13c-2.38 0-3.63-1.72-3.63-3.43 0-2.05 1.34-3.43 3.33-3.43 2.01 0 3.37 1.48 3.84 4.15.07.41.46.68.87.61a.75.75 0 0 0 .61-.87C9.55 4.97 7.61 3 4.83 3 1.98 3 0 5.03 0 7.93c0 2.81 2.2 4.93 5.13 4.93h6.16c3.26 0 4.71-2.09 4.71-4.16 0-1.3-.5-2.39-1.42-3.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCloudIconSecondary;
