import * as React from 'react';
import { SVGProps } from 'react';

function SvgPinterestIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M8.375.203C5.169.203 2 2.341 2 5.8 2 8 3.237 9.25 3.987 9.25c.31 0 .488-.863.488-1.106 0-.29-.74-.91-.74-2.119 0-2.513 1.912-4.294 4.387-4.294 2.128 0 3.703 1.21 3.703 3.431 0 1.66-.666 4.772-2.822 4.772-.778 0-1.444-.562-1.444-1.368 0-1.182.825-2.325.825-3.544 0-2.069-2.934-1.694-2.934.806 0 .525.066 1.106.3 1.584-.431 1.857-1.313 4.622-1.313 6.535 0 .59.085 1.172.141 1.762.106.12.053.107.216.047 1.575-2.156 1.519-2.578 2.231-5.4.384.732 1.378 1.125 2.166 1.125 3.318 0 4.809-3.234 4.809-6.15C14 2.228 11.319.203 8.375.203Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPinterestIcon;
