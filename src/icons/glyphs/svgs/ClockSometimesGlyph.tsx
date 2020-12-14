import * as React from 'react';

function SvgClockSometimesGlyph(props: React.SVGProps<SVGSVGElement>) {
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
        d="M29.064 8v4.2c5.563 1.957 9.566 7.254 9.556 13.49 0 7.886-6.414 14.31-14.31 14.31C16.424 40 10 33.586 10 25.69c0-6.147 3.904-11.385 9.349-13.41V8h9.715zm-1.236 1.235h-7.244v2.649a14.146 14.146 0 013.736-.514c1.206 0 2.382.168 3.508.455v-2.59zM11.235 25.69c0 7.204 5.86 13.075 13.075 13.075 7.214 0 13.075-5.87 13.075-13.075 0-7.205-5.87-13.075-13.075-13.075-7.204 0-13.075 5.87-13.075 13.075zm7.877-3.532l.859-.888 9.858 9.537-.858.888-9.859-9.537z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgClockSometimesGlyph;
