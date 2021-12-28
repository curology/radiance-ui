import * as React from 'react';
import { SVGProps } from 'react';

function SvgChatBubbleIconSecondary(props: SVGProps<SVGSVGElement>) {
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
        d="M4 6.5c-.83 0-1.5.67-1.5 1.5S3.17 9.5 4 9.5 5.5 8.83 5.5 8 4.83 6.5 4 6.5ZM8 6.5c-.83 0-1.5.67-1.5 1.5S7.17 9.5 8 9.5 9.5 8.83 9.5 8 8.83 6.5 8 6.5ZM12 6.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5Z"
        fill="currentColor"
      />
      <path
        d="M12.1 2H3.9C1.75 2 0 3.75 0 5.9v4.2C0 12.25 1.75 14 3.9 14h8.2c2.15 0 3.9-1.75 3.9-3.9V5.9C16 3.75 14.25 2 12.1 2Zm2.4 8.1c0 1.32-1.08 2.4-2.4 2.4H3.9c-1.32 0-2.4-1.08-2.4-2.4V5.9c0-1.32 1.08-2.4 2.4-2.4h8.2c1.32 0 2.4 1.08 2.4 2.4v4.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgChatBubbleIconSecondary;
