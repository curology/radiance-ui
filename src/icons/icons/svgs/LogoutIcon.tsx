import * as React from 'react';
import { SVGProps } from 'react';

function SvgLogoutIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Logout Icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.91 4.93005L11.79 4.05005L16.01 8.26007L11.79 12.4801L10.91 11.6001L13.58 8.92007H3.73003V7.67007H13.65L10.91 4.93005ZM5.69003 1.31006H1.28003V14.8101H5.49004V16.0601H0.0300293V0.0600586H5.69003V1.31006Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLogoutIcon;
