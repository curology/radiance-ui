import * as React from 'react';
import { SVGProps } from 'react';

function SvgVideoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Video Icon</title>
      <path
        d="M12.84 5.30995V1.19995H0.019989V14.66H12.83V10.78L16 12.6V8.03995V3.47995L12.84 5.30995ZM11.59 13.41H1.26999V2.44995H11.58V6.02995V7.46996V8.60995V10.05V13.41H11.59ZM14.75 8.03995V10.4299L12.84 9.32996V6.74995L14.75 5.64995V8.03995Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgVideoIcon;
