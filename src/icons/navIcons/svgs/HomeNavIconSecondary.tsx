import * as React from 'react';
import { SVGProps } from 'react';

function SvgHomeNavIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Home Nav Icon</title>
      <path
        d="m16.27 3.712-.158-.13C12.92.901 11.852 0 10.009 0 8.242 0 7.2.893 4.4 3.293l-.4.354C1.59 5.712 0 7.07 0 9.674v9.628c0 .382.316.698.698.698a.703.703 0 0 0 .697-.698V9.674c0-1.888 1.08-2.883 3.507-4.967l.41-.354c2.735-2.344 3.497-2.958 4.697-2.958 1.284 0 2.065.624 5.2 3.256l.158.13c2.838 2.382 3.238 3.219 3.238 5.06v9.461c0 .382.316.698.697.698a.703.703 0 0 0 .698-.698v-9.46c0-2.558-.93-3.777-3.73-6.13Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHomeNavIconSecondary;
