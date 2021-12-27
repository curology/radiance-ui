import * as React from 'react';
import { SVGProps } from 'react';

function SvgCalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Calendar Icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.86957 0V0.907801C4.86957 1.09581 5.02529 1.24823 5.21739 1.24823H9.85507V2.38298H5.21739C4.38496 2.38298 3.71014 1.72252 3.71014 0.907801V0H4.86957ZM12.2899 0V0.907801C12.2899 1.09581 12.4456 1.24823 12.6377 1.24823H16V16H0V1.24823H2.43478V2.38298H1.15942V4.87943H14.8406V2.38298H12.6377C11.8053 2.38298 11.1304 1.72252 11.1304 0.907801V0H12.2899ZM14.8406 6.01418H1.15942V14.8652H14.8406V6.01418Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCalendarIcon;
