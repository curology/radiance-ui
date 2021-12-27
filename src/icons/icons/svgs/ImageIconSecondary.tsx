import * as React from 'react';
import { SVGProps } from 'react';

function SvgImageIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Image Icon</title>
      <path
        d="M15.25 2H0.75C0.34 2 0 2.34 0 2.75V13.19C0 13.6 0.34 13.94 0.75 13.94H15.25C15.66 13.94 16 13.6 16 13.19V2.75C16 2.34 15.66 2 15.25 2ZM14.5 3.5V10.73C11.95 9.21 8.72 9.11 8 9.11C5.6 9.11 3.35 9.71 1.5 10.8V3.5H14.5ZM14.33 12.44H1.72C3.41 11.28 5.66 10.61 8 10.61C9.9 10.61 12.6 11.11 14.33 12.44Z"
        fill="currentColor"
      />
      <path
        d="M11.45 8.55C12.55 8.55 13.45 7.65 13.45 6.55C13.45 5.45 12.55 4.55 11.45 4.55C10.35 4.55 9.45 5.45 9.45 6.55C9.45 7.65 10.34 8.55 11.45 8.55ZM11.45 6.05C11.73 6.05 11.95 6.27 11.95 6.55C11.95 6.83 11.73 7.05 11.45 7.05C11.17 7.05 10.95 6.83 10.95 6.55C10.95 6.27 11.17 6.05 11.45 6.05Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgImageIconSecondary;
