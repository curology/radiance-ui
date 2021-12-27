import * as React from 'react';
import { SVGProps } from 'react';

function SvgFirmnessGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Firmness Glyph</title>
      <path
        d="M40 37.3858H9.21047C8.77594 37.3858 8.42419 37.0858 8.34142 36.672C8.25865 36.2581 8.47592 35.8443 8.87941 35.6787L36.71 24.3396H9.22083C8.7863 24.3396 8.43454 24.0395 8.35177 23.6257C8.26901 23.2119 8.48626 22.798 8.88975 22.6325L36.7203 11.2934H8V10.0001H38.7895C39.2241 10.0001 39.5758 10.3002 39.6586 10.714C39.7413 11.1278 39.5241 11.5417 39.1206 11.7072L11.29 23.0463H38.7792C39.2137 23.0463 39.5655 23.336 39.6482 23.7602C39.731 24.1844 39.5137 24.5879 39.1102 24.7534L11.2797 36.0926H40V37.3858Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFirmnessGlyph;
