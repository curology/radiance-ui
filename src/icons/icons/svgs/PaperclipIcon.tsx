import * as React from 'react';
import { SVGProps } from 'react';

function SvgPaperclipIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Paperclip Icon</title>
      <path
        d="M13.09.94c-.91-.7-2.03-1-3.17-.83-1.3.19-2.49.98-3.37 2.2L1.58 8.98l1 .75 4.98-6.68c.68-.95 1.58-1.56 2.54-1.7.8-.12 1.59.09 2.23.58 1.14.88 1.81 2.43.7 3.9l-3.71 5.12-2.28 3.12c-.59.78-1.7.94-2.49.35a1.783 1.783 0 0 1-.35-2.49l5.67-7.57c.23-.31.68-.37.99-.14.31.23.37.68.14.99L6.14 11.6l.99.76L12 5.96c.65-.86.47-2.09-.39-2.74a1.96 1.96 0 0 0-2.74.39L6.58 6.65 3.2 11.18c-1 1.33-.73 3.24.6 4.24.54.41 1.18.61 1.81.61.92 0 1.83-.42 2.43-1.21l.46-.64.01.01 1.71-2.36.57-.78 3.24-4.47c1.36-1.81.96-4.18-.94-5.64Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPaperclipIcon;
