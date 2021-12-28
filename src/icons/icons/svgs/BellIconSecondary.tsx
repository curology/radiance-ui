import * as React from 'react';
import { SVGProps } from 'react';

function SvgBellIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Bell Icon</title>
      <path
        d="M15.22 12.57h-.55V6.68C14.68 3 11.67 0 7.98 0 4.33 0 1.35 2.95 1.29 6.59c0 .03-.01.07-.01.1v5.89H.75a.74.74 0 0 0-.75.74c0 .41.34.75.75.75h5.27c.03 1.06.9 1.91 1.96 1.91s1.93-.85 1.96-1.91h5.28a.749.749 0 1 0 0-1.5Zm-7.24 1.92c-.24 0-.43-.18-.46-.41h.92c-.03.23-.22.41-.46.41ZM2.79 6.78c0-.03.01-.06.01-.09 0-2.86 2.33-5.19 5.19-5.19 2.84 0 5.15 2.28 5.19 5.11v5.97H2.79v-5.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBellIconSecondary;
