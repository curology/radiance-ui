import * as React from 'react';
import { SVGProps } from 'react';

function SvgPlanIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.74 0H2.2C1.54 0 1 .54 1 1.2v13.6c0 .66.54 1.2 1.2 1.2h9.54c.66 0 1.2-.54 1.2-1.2V1.2c0-.66-.54-1.2-1.2-1.2Zm-.3 14.5H2.5v-13h8.94v13Z"
        fill="currentColor"
      />
      <path
        d="M4.22 6.32h5.51c.41 0 .75-.34.75-.75s-.34-.75-.76-.75h-5.5a.749.749 0 1 0 0 1.5ZM7.22 3.91h2.5c.41 0 .75-.34.75-.75s-.33-.75-.74-.75h-2.5c-.41 0-.75.34-.75.75s.33.75.74.75ZM4.22 11.16h5.51c.41 0 .75-.34.75-.75s-.34-.75-.76-.75h-5.5a.749.749 0 1 0 0 1.5ZM4.22 8.75h5.51c.41 0 .75-.34.75-.75s-.34-.75-.76-.75h-5.5a.749.749 0 1 0 0 1.5ZM4.22 13.58h2.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2.5a.749.749 0 1 0 0 1.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPlanIconSecondary;
