import * as React from 'react';
import { SVGProps } from 'react';

function SvgDropIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Drop Icon</title>
      <path
        d="M7.95001 16.05C4.43001 16.05 1.57001 13.19 1.57001 9.67004C1.57001 6.32004 6.91001 1.06005 7.52001 0.470047L7.95001 0.0500488L8.38001 0.470047C8.99001 1.06005 14.33 6.32004 14.33 9.67004C14.33 13.19 11.47 16.05 7.95001 16.05ZM7.95001 1.79004C6.19001 3.58004 2.82001 7.47005 2.82001 9.66005C2.82001 12.49 5.12001 14.79 7.95001 14.79C10.78 14.79 13.08 12.49 13.08 9.66005C13.08 7.48005 9.70001 3.58004 7.95001 1.79004Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDropIcon;
