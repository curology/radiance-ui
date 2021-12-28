import * as React from 'react';
import { SVGProps } from 'react';

function SvgMoonIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.43 14.19a6.495 6.495 0 0 1-4.4-4.93.755.755 0 0 0-1.48.3 7.98 7.98 0 0 0 3.18 4.94C7.27 14.35 4.5 11.49 4.5 8s2.77-6.35 6.23-6.49a7.982 7.982 0 0 0-3.17 4.91.75.75 0 1 0 1.47.29 6.5 6.5 0 0 1 4.4-4.91c.31-.1.52-.39.52-.71 0-.33-.21-.62-.52-.71C12.65.13 11.83 0 11 0 6.59 0 3 3.59 3 8s3.59 8 8 8c.83 0 1.64-.13 2.43-.38a.75.75 0 0 0 0-1.43Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMoonIconSecondary;
