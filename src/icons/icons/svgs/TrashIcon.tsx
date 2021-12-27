import * as React from 'react';
import { SVGProps } from 'react';

function SvgTrashIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Trash Icon</title>
      <path
        d="M16.03 2.73004H12.93C12.64 1.20004 11.3 0.0400391 9.69002 0.0400391H6.48001C4.87001 0.0400391 3.53002 1.20004 3.24002 2.73004H0.0200195V3.98004H2.21002L3.47002 15.08C3.54002 15.64 4.02001 16.06 4.59001 16.06H11.43C11.99 16.06 12.47 15.64 12.55 15.07L13.92 3.97004H16.03V2.73004ZM6.48001 1.29004H9.69002C10.61 1.29004 11.38 1.90004 11.64 2.73004H4.54001C4.80001 1.90004 5.56001 1.29004 6.48001 1.29004ZM11.32 14.81H9.87001V6.97004H8.62001V14.81H7.22002V6.97004H5.97002V14.81H4.70001L3.47002 3.98004H12.65L11.32 14.81Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTrashIcon;
