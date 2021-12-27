import * as React from 'react';
import { SVGProps } from 'react';

function SvgCameraIconSecondary(props: SVGProps<SVGSVGElement>) {
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
        d="M14.78 13.92H1.22C0.55 13.92 0 13.37 0 12.7V3.22C0 2.55 0.55 2 1.22 2H14.77C15.45 2 16 2.55 16 3.22V12.7C16 13.37 15.45 13.92 14.78 13.92ZM1.5 12.42H14.5V3.5H1.5V12.42Z"
        fill="currentColor"
      />
      <path
        d="M8 11.46C6.07 11.46 4.5 9.89 4.5 7.96C4.5 6.03 6.07 4.46 8 4.46C9.93 4.46 11.5 6.03 11.5 7.96C11.5 9.89 9.93 11.46 8 11.46ZM8 5.96C6.9 5.96 6 6.86 6 7.96C6 9.06 6.9 9.96 8 9.96C9.1 9.96 10 9.06 10 7.96C10 6.86 9.1 5.96 8 5.96Z"
        fill="currentColor"
      />
      <path
        d="M12.75 5.96C13.16 5.96 13.5 5.62 13.5 5.21C13.5 4.8 13.16 4.46 12.75 4.46C12.34 4.46 12 4.8 12 5.21C12 5.63 12.34 5.96 12.75 5.96Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCameraIconSecondary;
