import * as React from 'react';
import { SVGProps } from 'react';

function SvgCameraNavIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Camera Nav Icon</title>
      <path
        d="M13.52 2.25L14.97 4L15.35 4.45H18.78V16.87H1.28V4.46H4.73L5.11 4L6.53 2.26H13.52V2.25ZM14.1 1H5.91L4.11 3.2H0V18.12H20V3.21H15.91L14.1 1Z"
        fill="currentColor"
      />
      <path
        d="M10.01 7.43994C11.58 7.43994 12.85 8.70994 12.85 10.2799C12.85 11.8499 11.58 13.1199 10.01 13.1199C8.43999 13.1199 7.16998 11.8499 7.16998 10.2799C7.16998 8.70994 8.44999 7.43994 10.01 7.43994ZM10.01 6.18994C7.74999 6.18994 5.91998 8.01994 5.91998 10.2799C5.91998 12.5399 7.74999 14.3699 10.01 14.3699C12.27 14.3699 14.1 12.5399 14.1 10.2799C14.1 8.01994 12.27 6.18994 10.01 6.18994Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCameraNavIcon;
