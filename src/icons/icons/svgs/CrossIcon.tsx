import * as React from 'react';
import { SVGProps } from 'react';

function SvgCrossIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Cross Icon</title>
      <path
        d="M16.01 0.930046L15.12 0.0500488L8.01002 7.15005L0.910027 0.0500488L0.0200195 0.930046L7.13003 8.04005L0.0200195 15.15L0.910027 16.03L8.01002 8.92004L15.12 16.03L16.01 15.15L8.90002 8.04005L16.01 0.930046Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCrossIcon;
