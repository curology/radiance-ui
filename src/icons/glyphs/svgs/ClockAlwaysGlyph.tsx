import * as React from 'react';
import { SVGProps } from 'react';

function SvgClockAlwaysGlyph(props: SVGProps<SVGSVGElement>) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.064 8v4.2c5.563 1.957 9.566 7.254 9.556 13.49 0 7.886-6.414 14.31-14.31 14.31C16.424 40 10 33.586 10 25.69c0-6.147 3.904-11.385 9.349-13.41V8h9.715Zm-1.236 1.235h-7.244v2.649a14.146 14.146 0 0 1 3.736-.514c1.206 0 2.382.168 3.508.455v-2.59ZM11.235 25.69c0 7.204 5.86 13.075 13.075 13.075 7.214 0 13.075-5.87 13.075-13.075 0-7.205-5.87-13.075-13.075-13.075-7.204 0-13.075 5.87-13.075 13.075Zm8.332-.01a4.745 4.745 0 0 1 9.487 0 4.745 4.745 0 0 1-9.487 0Zm1.235.01a3.509 3.509 0 1 0 7.018-.002 3.509 3.509 0 0 0-7.018.002Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgClockAlwaysGlyph;
