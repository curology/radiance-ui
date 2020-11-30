import * as React from 'react';

function SvgFacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.939 15.97V8.687h2.445l.366-2.84H8.94V4.035c0-.822.228-1.382 1.407-1.382h1.503V.111A20.127 20.127 0 009.66 0C7.49 0 6.007 1.323 6.007 3.753v2.094H3.556v2.839h2.451v7.285H8.94z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFacebookIcon;
