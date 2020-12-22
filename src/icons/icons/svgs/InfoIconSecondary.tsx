import * as React from 'react';

function SvgInfoIconSecondary(props: React.SVGProps<SVGSVGElement>) {
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
        d="M8.01 3c.83 0 1.5-.67 1.5-1.5S8.84 0 8.01 0s-1.5.67-1.5 1.5S7.18 3 8.01 3zM15.25 16H.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h14.5c.41 0 .75.34.75.75s-.34.75-.75.75zM8 7.5H.75C.34 7.5 0 7.16 0 6.75S.34 6 .75 6H8c.41 0 .75.34.75.75s-.34.75-.75.75z"
        fill="currentColor"
      />
      <path
        d="M8 16c-.41 0-.75-.34-.75-.75v-8.5c0-.41.34-.75.75-.75s.75.34.75.75v8.5c0 .41-.34.75-.75.75z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgInfoIconSecondary;
