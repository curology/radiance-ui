import * as React from 'react';
import { SVGProps } from 'react';

function SvgMakeupGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Makeup Glyph</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.9518 13.25H30.1966V15.1983H33.25V16.4483H30.1966V18.2858H33.25V19.5358H30.1966V21.7041H31.9518V22.9541H30.1966V27.842H28.9466V22.9541H27.1915V21.7041H28.9466V19.5358H25.8933V18.2858H28.9466V16.4483H25.8933V15.1983H28.9466V13.25H27.1915V12H31.9518V13.25ZM19.7266 22.6599V34.6791H16.0482V22.6599H19.7266ZM21.0249 21.2264H14.75V36.0023H21.0249V21.2264ZM31.4108 29.276V34.6791H27.8406V29.276H31.4108ZM32.7091 27.8425H26.4342V36.0023H32.7091V27.8425Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMakeupGlyph;
