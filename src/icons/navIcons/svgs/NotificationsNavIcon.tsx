import * as React from 'react';
import { SVGProps } from 'react';

function SvgNotificationsNavIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Notifications Nav Icon</title>
      <path
        d="m18.8 14.38-1.58-3.65L16 4.65C15.36 2.81 14.04 1 10.39 1 6.74 1 5.4 2.8 4.76 4.65l-1.21 6.08L2 14.38h4.6c0 2.26 1.7 4.1 3.8 4.1 2.1 0 3.8-1.84 3.8-4.1h4.6ZM4.7 11.22l.05-.12.03-.13 1.2-6c.49-1.36 1.42-2.73 4.42-2.73 2.98 0 3.89 1.3 4.4 2.73l1.2 6 .03.13.05.12.82 1.9H3.89l.81-1.9Zm5.69 6.01c-1.41 0-2.55-1.28-2.55-2.85h5.1c0 1.57-1.14 2.85-2.55 2.85Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgNotificationsNavIcon;
