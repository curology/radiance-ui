import * as React from 'react';
import { SVGProps } from 'react';

function SvgGoogleIcon(props: SVGProps<SVGSVGElement>) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 3.093c1.502 0 2.516.65 3.093 1.191l2.258-2.204C11.964.791 10.161 0 8.001 0A7.994 7.994 0 0 0 .852 4.409L3.44 6.418C4.09 4.488 5.885 3.093 8 3.093Z"
        fill="#EA4335"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.68 8.178c0-.658-.053-1.138-.169-1.636H8v2.97h4.409c-.089.737-.569 1.848-1.636 2.595l2.525 1.955c1.51-1.395 2.382-3.449 2.382-5.884Z"
        fill="#4285F4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.449 9.582A4.925 4.925 0 0 1 3.182 8c0-.551.098-1.084.258-1.582L.853 4.408A8.007 8.007 0 0 0 0 8c0 1.289.311 2.507.853 3.591L3.45 9.582Z"
        fill="#FBBC05"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 16c2.16 0 3.973-.711 5.298-1.938l-2.525-1.955c-.675.47-1.582.8-2.773.8-2.116 0-3.911-1.396-4.551-3.325l-2.587 2.01C2.178 14.203 4.872 16 8 16Z"
        fill="#34A853"
      />
    </svg>
  );
}

export default SvgGoogleIcon;
