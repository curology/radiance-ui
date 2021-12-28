import * as React from 'react';
import { SVGProps } from 'react';

function SvgHelpIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Help Icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.67 6.79a6.747 6.747 0 0 0-7.9-5.36C5 1.77 3.47 2.78 2.46 4.27a6.71 6.71 0 0 0-1.04 5.06 6.747 6.747 0 0 0 7.9 5.36 6.7 6.7 0 0 0 4.31-2.84 6.71 6.71 0 0 0 1.04-5.06ZM6.53.2C7.04.11 7.55.06 8.05.06a7.996 7.996 0 0 1 1.5 15.85c-.51.09-1.02.14-1.52.14-3.76 0-7.12-2.66-7.85-6.49A7.996 7.996 0 0 1 6.53.2Zm-.77 6.02c.03-1.39 1.05-2.17 2.28-2.17 1.23 0 2.27.74 2.27 2.05 0 1.13-.562 1.65-1.027 2.08-.33.306-.613.568-.613.97v.26h-1.4v-.32c0-.771.452-1.17.891-1.557.415-.366.819-.722.819-1.373 0-.67-.37-1-.92-1-.59 0-.98.39-.98 1.06H5.76Zm1.35 4.75c0-.49.38-.84.87-.84a.845.845 0 1 1 0 1.69c-.5 0-.87-.37-.87-.85Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHelpIcon;
