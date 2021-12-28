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
        d="M31.952 13.25h-1.755v1.948h3.053v1.25h-3.053v1.838h3.053v1.25h-3.053v2.168h1.755v1.25h-1.755v4.888h-1.25v-4.888h-1.755v-1.25h1.755v-2.168h-3.054v-1.25h3.054v-1.838h-3.054v-1.25h3.054V13.25h-1.755V12h4.76v1.25Zm-12.225 9.41v12.02h-3.679V22.66h3.679Zm1.298-1.434H14.75v14.776h6.275V21.226Zm10.386 8.05v5.403h-3.57v-5.403h3.57Zm1.298-1.433h-6.275v8.16h6.275v-8.16Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMakeupGlyph;
