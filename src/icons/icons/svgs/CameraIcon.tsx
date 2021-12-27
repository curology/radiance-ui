import * as React from 'react';
import { SVGProps } from 'react';

function SvgCameraIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Camera Icon</title>
      <path
        d="M10.69 2.25L12.15 4.02H14.76V13.45H1.26V4.02H3.89L4.27 3.56L5.33 2.26H10.69V2.25ZM11.28 1H4.73L3.29 2.76H0V14.7H16V2.77H12.73L11.28 1Z"
        fill="currentColor"
      />
      <path
        d="M8.00999 6.3999C9.12999 6.3999 10.03 7.3099 10.03 8.4199C10.03 9.5299 9.11999 10.4399 8.00999 10.4399C6.89999 10.4399 5.98999 9.5299 5.98999 8.4199C5.98999 7.3099 6.88999 6.3999 8.00999 6.3999ZM8.00999 5.1499C6.19999 5.1499 4.73999 6.6199 4.73999 8.4199C4.73999 10.2199 6.20999 11.6899 8.00999 11.6899C9.81999 11.6899 11.28 10.2199 11.28 8.4199C11.28 6.6199 9.80999 5.1499 8.00999 5.1499Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCameraIcon;
