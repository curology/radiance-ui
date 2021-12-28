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
      <path
        d="M12.1 0c-1.85 0-2.61 1.13-3.17 1.95-.41.61-.6.84-.93.84-.46 0-.64-.22-1.07-.89C6.43 1.1 5.73 0 3.9 0 2.73 0 0 .49 0 5.02c0 2.36 1.33 4.84 3.86 7.16 1.46 1.34 3.57 3.57 3.59 3.59.15.15.35.23.55.23a.755.755 0 0 0 .55-1.27c-.09-.09-2.17-2.29-3.67-3.66C2.67 9.04 1.5 6.95 1.5 5.02c0-2.33.81-3.52 2.4-3.52 1.01 0 1.33.5 1.77 1.2.42.67 1 1.59 2.33 1.59 1.16 0 1.72-.83 2.17-1.5.49-.72.88-1.29 1.93-1.29 1.12 0 2.4.41 2.4 3.62 0 2.68-2.08 4.63-3.2 5.68l-.19.18c-.61.58-1.25 1.2-1.8 1.75-.29.29-.29.77 0 1.06.29.29.77.29 1.06 0 .54-.54 1.17-1.15 1.77-1.72l.19-.17C13.52 10.78 16 8.46 16 5.12 16 .89 13.88 0 12.1 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHeartIconSecondary;
