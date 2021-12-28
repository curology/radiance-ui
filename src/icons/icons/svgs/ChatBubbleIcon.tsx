import * as React from 'react';
import { SVGProps } from 'react';

function SvgChatBubbleIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M8 1.75c3.45 0 6.25 2.8 6.25 6.25 0 1.54-.58 3.03-1.62 4.19l-.61.68.46.79.34.6H7.87c-3.38-.07-6.12-2.87-6.12-6.24 0-3.46 2.8-6.27 6.25-6.27ZM8 .5C3.86.5.5 3.86.5 8c0 4.09 3.28 7.41 7.35 7.49h7.14l-1.43-2.47A7.477 7.477 0 0 0 15.5 8C15.5 3.86 12.14.5 8 .5Z"
        fill="currentColor"
      />
      <path
        d="M10.6 7.35c-.36 0-.65.29-.65.65 0 .36.29.65.65.65.36 0 .65-.29.65-.65 0-.36-.29-.65-.65-.65ZM8 7.35c-.36 0-.65.29-.65.65 0 .36.29.65.65.65.36 0 .65-.29.65-.65 0-.36-.3-.65-.65-.65ZM5.39 7.35c-.36 0-.65.29-.65.65 0 .36.29.65.65.65.36 0 .65-.29.65-.65 0-.36-.29-.65-.65-.65Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgChatBubbleIcon;
