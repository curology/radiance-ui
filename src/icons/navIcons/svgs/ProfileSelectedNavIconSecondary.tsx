import * as React from 'react';

function SvgProfileSelectedNavIconSecondary(
  props: React.SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.807 13.381h-1.435c-.643 0-1.406-.24-1.406-.92 0-.354.174-.564.56-1.005.598-.69 1.426-1.638 1.426-3.697V5.21C14.952 2.193 12.864 0 9.977 0c-2.39 0-4.929 1.858-4.929 5.307v2.222c0 2.203.819 3.151 1.416 3.84.396.46.561.662.561 1.093 0 .383-.487.92-1.407.92H4.193C1.61 13.381 0 15.21 0 18.16V20h20v-1.84c0-2.95-1.61-4.779-4.193-4.779z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgProfileSelectedNavIconSecondary;
