import * as React from 'react';

function SvgLockIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M11.37 3.33v1.99l2.76 2.85V16H2.07V8.15l2.76-2.58V3.33C4.83 1.53 6.3.06 8.1.06s3.27 1.47 3.27 3.27zm-1.25 0c0-1.11-.91-2.02-2.02-2.02-1.11 0-2.02.91-2.02 2.02v1.89h4.04V3.33zM3.32 8.7v6.06h9.56V8.68l-2.14-2.21H5.7L3.32 8.7zm2.66 1.92a2.121 2.121 0 004.24 0 2.121 2.121 0 00-4.24 0zm1.24 0c0-.49.4-.88.88-.88s.88.39.88.88-.39.88-.88.88-.88-.39-.88-.88z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLockIcon;
