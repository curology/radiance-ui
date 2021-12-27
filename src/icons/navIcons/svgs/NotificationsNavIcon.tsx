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
        d="M18.8 14.38L17.22 10.73L16 4.65C15.36 2.81 14.04 1 10.39 1C6.74001 1 5.4 2.8 4.76 4.65L3.55 10.73L2 14.38H6.6C6.6 16.64 8.3 18.48 10.4 18.48C12.5 18.48 14.2 16.64 14.2 14.38H18.8ZM4.7 11.22L4.75 11.1L4.78 10.97L5.98 4.97C6.47 3.61 7.4 2.24 10.4 2.24C13.38 2.24 14.29 3.54 14.8 4.97L16 10.97L16.03 11.1L16.08 11.22L16.9 13.12H3.89L4.7 11.22ZM10.39 17.23C8.98001 17.23 7.84 15.95 7.84 14.38H12.94C12.94 15.95 11.8 17.23 10.39 17.23Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgNotificationsNavIcon;
