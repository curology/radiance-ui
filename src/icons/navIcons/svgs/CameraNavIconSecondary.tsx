import * as React from 'react';

function SvgCameraNavIconSecondary(props: React.SVGProps<SVGSVGElement>) {
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
        d="M18.683 3H1.317C.585 3 0 3.585 0 4.317v12.146c0 .722.585 1.317 1.317 1.317h17.366c.722 0 1.317-.585 1.317-1.317V4.317C20 3.585 19.415 3 18.683 3zm-.098 13.356H1.415V4.415h17.17v11.941z"
        fill="currentColor"
      />
      <path
        d="M10 14.815c2.439 0 4.43-1.99 4.43-4.43 0-2.439-1.991-4.429-4.43-4.429a4.439 4.439 0 00-4.43 4.43c0 2.438 1.991 4.429 4.43 4.429zm0-7.395a2.97 2.97 0 012.966 2.965A2.977 2.977 0 0110 13.351a2.97 2.97 0 01-2.966-2.966A2.965 2.965 0 0110 7.42zM16.39 7.693a1.005 1.005 0 100-2.01 1.005 1.005 0 000 2.01z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCameraNavIconSecondary;
