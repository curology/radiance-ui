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
        d="M16.2698 3.71163L16.1116 3.5814C12.9209 0.902325 11.8512 0 10.0093 0C8.24186 0 7.2 0.893023 4.4 3.29302L4 3.64651C1.5907 5.71163 0 7.06977 0 9.67442V19.3023C0 19.6837 0.316279 20 0.697674 20C1.07907 20 1.39535 19.6837 1.39535 19.3023V9.67442C1.39535 7.78605 2.47442 6.7907 4.90233 4.70698L5.31163 4.35349C8.04651 2.0093 8.8093 1.39535 10.0093 1.39535C11.293 1.39535 12.0744 2.0186 15.2093 4.65116L15.3674 4.7814C18.2047 7.16279 18.6047 8 18.6047 9.84186V19.3023C18.6047 19.6837 18.9209 20 19.3023 20C19.6837 20 20 19.6837 20 19.3023V9.84186C20 7.28372 19.0698 6.06512 16.2698 3.71163Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHomeNavIconSecondary;
