import * as React from 'react';

function SvgYouTubeIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M15.268 4.393a1.891 1.891 0 00-1.341-1.329C12.744 2.75 8 2.75 8 2.75s-4.744 0-5.927.314A1.891 1.891 0 00.732 4.393C.415 5.565.415 8.01.415 8.01s0 2.445.317 3.617a1.864 1.864 0 001.341 1.308C3.256 13.25 8 13.25 8 13.25s4.744 0 5.927-.314a1.864 1.864 0 001.341-1.308c.317-1.172.317-3.617.317-3.617s0-2.446-.317-3.618zm-8.82 5.838v-4.44l3.965 2.22-3.965 2.22z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgYouTubeIcon;
