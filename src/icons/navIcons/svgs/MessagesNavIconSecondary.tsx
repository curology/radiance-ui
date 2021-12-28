import * as React from 'react';
import { SVGProps } from 'react';

function SvgMessagesNavIconSecondary(props: SVGProps<SVGSVGElement>) {
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
        d="M4.867 8.51a1.93 1.93 0 0 0-1.926 1.926 1.93 1.93 0 0 0 1.926 1.927 1.93 1.93 0 0 0 1.927-1.927A1.93 1.93 0 0 0 4.867 8.51ZM10.005 8.51a1.93 1.93 0 0 0-1.927 1.926 1.93 1.93 0 0 0 1.927 1.927 1.93 1.93 0 0 0 1.926-1.927 1.93 1.93 0 0 0-1.926-1.926ZM15.142 8.51a1.93 1.93 0 0 0-1.927 1.926 1.93 1.93 0 0 0 1.927 1.927 1.93 1.93 0 0 0 1.926-1.927 1.93 1.93 0 0 0-1.926-1.926Z"
        fill="currentColor"
      />
      <path
        d="M15.272 3H4.737A4.75 4.75 0 0 0 0 7.737v5.389a4.744 4.744 0 0 0 4.737 4.737h10.526A4.744 4.744 0 0 0 20 13.126V7.737C20.01 5.131 17.878 3 15.272 3Zm3.341 10.135a3.344 3.344 0 0 1-3.34 3.341H4.736a3.344 3.344 0 0 1-3.341-3.341V7.737a3.344 3.344 0 0 1 3.341-3.341h10.526a3.346 3.346 0 0 1 3.35 3.341v5.398Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMessagesNavIconSecondary;
