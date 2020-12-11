import * as React from 'react';

function SvgFlagIconSecondary(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M.75 16c-.41 0-.75-.34-.75-.75V.75C0 .34.34 0 .75 0h14.5c.3 0 .58.18.69.46.11.28.05.6-.16.82l-4.29 4.29 4.29 4.29a.751.751 0 01-.53 1.28H3.7c-.41 0-.75-.34-.75-.75s.34-.74.75-.74h9.74L9.9 6.1c-.3-.29-.3-.76 0-1.06l3.54-3.54H1.5v13.75c0 .41-.34.75-.75.75z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFlagIconSecondary;
