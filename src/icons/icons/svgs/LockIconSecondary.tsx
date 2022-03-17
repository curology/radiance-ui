import * as React from 'react';
import { SVGProps } from 'react';

function SvgLockIconSecondary(props: SVGProps<SVGSVGElement>) {
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
        d="M13.03 9.25c-.41 0-.75.34-.75.75v4.34c0 .08-.07.15-.15.15H4.65c-.08 0-.15-.07-.15-.15v-6.2h7.07c.41 0 .75-.34.75-.75v-2.9C12.32 1.68 10.85 0 8.39 0 5.97 0 4.46 1.68 4.46 4.39v.23c0 .41.34.75.75.75s.75-.34.75-.75v-.23c0-1.87.86-2.89 2.43-2.89 1.61 0 2.43 1.01 2.43 2.99v2.15H3.75c-.41 0-.75.34-.75.75v6.96c0 .91.74 1.65 1.65 1.65h7.48c.91 0 1.65-.74 1.65-1.65V10c0-.41-.33-.75-.75-.75Z"
        fill="currentColor"
      />
      <path
        d="M9.78 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLockIconSecondary;
