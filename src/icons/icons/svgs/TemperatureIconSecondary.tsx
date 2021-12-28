import * as React from 'react';
import { SVGProps } from 'react';

function SvgTemperatureIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Temperature Icon</title>
      <path
        d="M13.51 0a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5Zm0 3.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1ZM7.25 3.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H.75c-.41 0-.75.34-.75.75 0 .03.02.06.02.1v6.18c0 .03-.02.05-.02.09 0 .04.02.06.02.1v6.27c0 .41.34.75.75.75s.75-.34.75-.75V9.62h5.73c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H1.52V3.25h5.73Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTemperatureIconSecondary;
