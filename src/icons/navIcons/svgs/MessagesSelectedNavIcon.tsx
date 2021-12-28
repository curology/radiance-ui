import * as React from 'react';
import { SVGProps } from 'react';

function SvgMessagesSelectedNavIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 10a9 9 0 0 0-18 0c0 4.91 3.93 8.89 8.82 8.99h8.56l-1.71-2.97A8.86 8.86 0 0 0 19 10Zm-12.12.78a.781.781 0 0 1 0-1.56.781.781 0 0 1 0 1.56Zm3.12 0a.781.781 0 0 1 0-1.56.781.781 0 0 1 0 1.56Zm3.13 0a.781.781 0 0 1 0-1.56.781.781 0 0 1 0 1.56Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMessagesSelectedNavIcon;
