import * as React from 'react';
import { SVGProps } from 'react';

function SvgAcneOneGlyph(props: SVGProps<SVGSVGElement>) {
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
        d="M23.995 26A1.996 1.996 0 0 1 22 23.995c0-1.107.897-1.995 1.995-1.995S26 22.897 26 23.995A2.017 2.017 0 0 1 23.995 26Zm0-2.807a.8.8 0 0 0-.802.802c0 .449.363.812.802.812.44 0 .812-.363.812-.812a.821.821 0 0 0-.812-.802Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgAcneOneGlyph;
