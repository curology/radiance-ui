import * as React from 'react';
import { SVGProps } from 'react';

function SvgTextureGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Texture Glyph</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.9173 19.3655L16.2556 11.7233L8.87617 19.2779L8 18.4212L16.2458 10.0001L23.8978 17.6326L31.248 10.0196L40 18.0123L39.1822 18.9177L31.3064 11.7135L23.9173 19.3655ZM23.9173 28.5166L16.2556 20.8841L8.87617 28.429L8 27.582L16.2458 19.1512L23.8978 26.7837L31.248 19.1707L40 27.1732L39.1822 28.0688L31.3064 20.8647L23.9173 28.5166ZM16.2556 30.0355L23.9173 37.668L31.3064 30.016L39.1822 37.2201L40 36.3245L31.248 28.3221L23.8978 35.9351L16.2458 28.3123L8 36.7334L8.87617 37.5804L16.2556 30.0355Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTextureGlyph;
