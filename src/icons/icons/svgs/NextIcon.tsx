import * as React from 'react';
import { SVGProps } from 'react';

function SvgNextIcon(props: SVGProps<SVGSVGElement>) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.02 8.34.77 16.04V.03l11.25 8.31Zm-2.15-.03-7.85-5.8v11.17l7.85-5.37ZM14.74.05h1.25v16h-1.25v-16Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgNextIcon;
