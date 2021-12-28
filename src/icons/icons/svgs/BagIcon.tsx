import * as React from 'react';
import { SVGProps } from 'react';

function SvgBagIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M13.88 3.16h-1.81C11.69 1.37 10.14.03 7.96.03c-2.18 0-3.73 1.35-4.11 3.13h-1.7L.02 16.07h16L13.88 3.16Zm-8.22-.95c.54-.6 1.36-.93 2.3-.93.94 0 1.75.33 2.3.93.25.28.44.6.55.96H5.13c.1-.36.28-.68.53-.96ZM3.2 4.41H12.81l1.72 10.41H1.48L3.2 4.41Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBagIcon;
