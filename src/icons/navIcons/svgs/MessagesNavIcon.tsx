import * as React from 'react';
import { SVGProps } from 'react';

function SvgMessagesNavIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Messages Nav Icon</title>
      <path
        d="M10 2.25c4.27 0 7.75 3.48 7.75 7.75 0 1.92-.71 3.76-2.01 5.19l-.61.68.46.79.63 1.09H9.85c-4.19-.08-7.59-3.56-7.59-7.74C2.25 5.73 5.73 2.25 10 2.25ZM10 1a9 9 0 0 0-9 9c0 4.91 3.93 8.89 8.82 8.99h8.56l-1.71-2.97A8.99 8.99 0 0 0 19 9.99C19 5.03 14.97 1 10 1Z"
        fill="currentColor"
      />
      <path
        d="M13.13 9.22a.781.781 0 0 0 0 1.56.781.781 0 0 0 0-1.56ZM10 9.22a.781.781 0 0 0 0 1.56.781.781 0 0 0 0-1.56ZM6.88 9.22a.781.781 0 0 0 0 1.56.781.781 0 0 0 0-1.56Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMessagesNavIcon;
