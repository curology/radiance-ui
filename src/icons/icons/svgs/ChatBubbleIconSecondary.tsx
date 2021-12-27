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
      <title>Chat Bubble Icon</title>
      <path
        d="M4 6.5C3.17 6.5 2.5 7.17 2.5 8C2.5 8.83 3.17 9.5 4 9.5C4.83 9.5 5.5 8.83 5.5 8C5.5 7.17 4.83 6.5 4 6.5Z"
        fill="currentColor"
      />
      <path
        d="M8 6.5C7.17 6.5 6.5 7.17 6.5 8C6.5 8.83 7.17 9.5 8 9.5C8.83 9.5 9.5 8.83 9.5 8C9.5 7.17 8.83 6.5 8 6.5Z"
        fill="currentColor"
      />
      <path
        d="M12 6.5C11.17 6.5 10.5 7.17 10.5 8C10.5 8.83 11.17 9.5 12 9.5C12.83 9.5 13.5 8.83 13.5 8C13.5 7.17 12.83 6.5 12 6.5Z"
        fill="currentColor"
      />
      <path
        d="M12.1 2H3.9C1.75 2 0 3.75 0 5.9V10.1C0 12.25 1.75 14 3.9 14H12.1C14.25 14 16 12.25 16 10.1V5.9C16 3.75 14.25 2 12.1 2ZM14.5 10.1C14.5 11.42 13.42 12.5 12.1 12.5H3.9C2.58 12.5 1.5 11.42 1.5 10.1V5.9C1.5 4.58 2.58 3.5 3.9 3.5H12.1C13.42 3.5 14.5 4.58 14.5 5.9V10.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgChatBubbleIconSecondary;
