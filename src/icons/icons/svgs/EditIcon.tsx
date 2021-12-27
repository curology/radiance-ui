import * as React from 'react';
import { SVGProps } from 'react';

function SvgEditIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Edit Icon</title>
      <path
        d="M14 0.989821C12.6 -0.290179 10.41 -0.200188 9.11996 1.19981L1.58997 9.35982L0.0999756 15.9498L6.74997 14.0998L14.26 5.94981C14.89 5.26981 15.22 4.37981 15.18 3.44981C15.15 2.52981 14.75 1.66982 14 0.989821ZM2.53996 10.8498L5.16997 13.2498L1.78996 14.1898L2.53996 10.8498ZM13.36 5.09982L6.38997 12.6598L3.05997 9.61981L10.05 2.03981C10.87 1.14981 12.28 1.08982 13.23 1.95982C13.67 2.35982 13.92 2.90982 13.95 3.49982C13.98 4.08982 13.76 4.66982 13.36 5.09982Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgEditIcon;
