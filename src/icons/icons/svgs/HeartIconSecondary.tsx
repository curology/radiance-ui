import * as React from 'react';
import { SVGProps } from 'react';

function SvgHeartIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Heart Icon</title>
      <path
        d="M12.1 0C10.25 0 9.49 1.13 8.93 1.95C8.52 2.56 8.33 2.79 8 2.79C7.54 2.79 7.36 2.57 6.93 1.9C6.43 1.1 5.73 0 3.9 0C2.73 0 0 0.49 0 5.02C0 7.38 1.33 9.86 3.86 12.18C5.32 13.52 7.43 15.75 7.45 15.77C7.6 15.92 7.8 16 8 16C8.19 16 8.37 15.93 8.52 15.79C8.82 15.51 8.83 15.03 8.55 14.73C8.46 14.64 6.38 12.44 4.88 11.07C2.67 9.04 1.5 6.95 1.5 5.02C1.5 2.69 2.31 1.5 3.9 1.5C4.91 1.5 5.23 2 5.67 2.7C6.09 3.37 6.67 4.29 8 4.29C9.16 4.29 9.72 3.46 10.17 2.79C10.66 2.07 11.05 1.5 12.1 1.5C13.22 1.5 14.5 1.91 14.5 5.12C14.5 7.8 12.42 9.75 11.3 10.8L11.11 10.98C10.5 11.56 9.86 12.18 9.31 12.73C9.02 13.02 9.02 13.5 9.31 13.79C9.6 14.08 10.08 14.08 10.37 13.79C10.91 13.25 11.54 12.64 12.14 12.07L12.33 11.9C13.52 10.78 16 8.46 16 5.12C16 0.89 13.88 0 12.1 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHeartIconSecondary;
