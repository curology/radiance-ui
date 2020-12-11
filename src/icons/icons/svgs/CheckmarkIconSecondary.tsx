import * as React from 'react';

function SvgCheckmarkIconSecondary(props: React.SVGProps<SVGSVGElement>) {
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
        d="M6.56 16c-.35 0-.66-.25-.73-.6-.04-.19-.98-4.59-5.23-5.47a.75.75 0 01-.58-.89c.08-.41.48-.67.88-.58 2.88.6 4.51 2.48 5.4 4.09C7.15 9.13 9.36 3.26 14.88.1a.74.74 0 011.02.28c.21.36.08.82-.28 1.02-7.24 4.14-8.3 13.83-8.31 13.92a.76.76 0 01-.71.68h-.04z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCheckmarkIconSecondary;
