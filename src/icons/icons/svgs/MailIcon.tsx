import * as React from 'react';
import { SVGProps } from 'react';

function SvgMailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Mail Icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.68 5.15V3.36001H1.35999V5.14001L8.17001 7.58001L14.68 5.15ZM0.0100098 2.01001H16.02V6.08001L8.17001 9.00001L0.0100098 6.08001V2.01001ZM0 14.3499L16 14.3599V8.16991H14.75V13.1099L1.25 13.0999V8.15991H0V14.3499Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMailIcon;
