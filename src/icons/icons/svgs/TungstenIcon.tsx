import * as React from 'react';
import { SVGProps } from 'react';

function SvgTungstenIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Tungsten Icon</title>
      <path
        d="M10.39 4.8V2.29H8.52V.04H7.2v2.25H5.33V4.8a6.007 6.007 0 0 0-2.94 3.06c-.64 1.51-.61 3.23.08 4.84a5.433 5.433 0 0 0 2.81 2.83c.85.37 1.73.55 2.59.55 1.15 0 2.26-.33 3.25-.97a5.916 5.916 0 0 0-.73-10.31Zm.03 9.27c-1.36.89-3.06 1.01-4.65.32-.96-.41-1.74-1.2-2.16-2.17-.71-1.66-.43-3.02-.08-3.87A4.723 4.723 0 0 1 6.17 5.8l.4-.15v-2.1h2.57v2.1l.4.15c1.82.7 3 2.41 3 4.35 0 1.58-.79 3.05-2.12 3.92Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTungstenIcon;
