import * as React from 'react';
import { SVGProps } from 'react';

function SvgSmileIcon(props: SVGProps<SVGSVGElement>) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.01 16.04c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm0-14.75c-3.73 0-6.75 3.03-6.75 6.76s3.03 6.75 6.75 6.75c3.73 0 6.76-3.03 6.76-6.75s-3.03-6.76-6.76-6.76ZM5.64 6.56a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6.62 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-8.73 2.8c1.13 1.58 2.75 2.48 4.45 2.48h.01c1.68-.01 3.22-.9 4.35-2.49l-1.02-.72c-.89 1.26-2.07 1.95-3.33 1.96h-.01c-1.29 0-2.54-.71-3.44-1.96l-1.01.73Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSmileIcon;
