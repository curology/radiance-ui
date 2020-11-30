import * as React from 'react';

function SvgLogoutIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M10.91 4.93l.88-.88 4.22 4.21-4.22 4.22-.88-.88 2.67-2.68H3.73V7.67h9.92l-2.74-2.74zM5.69 1.31H1.28v13.5h4.21v1.25H.03v-16h5.66v1.25z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLogoutIcon;
