import * as React from 'react';

function SvgCirclePlusIconSecondary(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 0C3.59 0 0 3.59 0 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm0 14.5c-3.58 0-6.5-2.92-6.5-6.5S4.42 1.5 8 1.5s6.5 2.92 6.5 6.5-2.92 6.5-6.5 6.5z"
        fill="currentColor"
      />
      <path
        d="M11.7 7.25H8.75V4.3c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2.95H4.3c-.41 0-.75.34-.75.75s.34.75.75.75h2.95v2.95c0 .41.34.75.75.75s.75-.34.75-.75V8.75h2.95c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCirclePlusIconSecondary;
