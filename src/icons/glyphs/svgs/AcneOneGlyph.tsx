import * as React from 'react';

function SvgAcneOneGlyph(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23.995 26A1.996 1.996 0 0122 23.995c0-1.107.897-1.995 1.995-1.995S26 22.897 26 23.995A2.017 2.017 0 0123.995 26zm0-2.807a.8.8 0 00-.802.802c0 .449.363.812.802.812.44 0 .812-.363.812-.812a.821.821 0 00-.812-.802z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgAcneOneGlyph;
