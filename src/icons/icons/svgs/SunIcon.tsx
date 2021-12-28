import * as React from 'react';
import { SVGProps } from 'react';

function SvgSunIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M2.86 8.04c0 2.83 2.3 5.12 5.12 5.12 2.82 0 5.11-2.3 5.12-5.12 0-2.83-2.29-5.12-5.12-5.12s-5.12 2.3-5.12 5.12Zm1.25.01c0-2.14 1.74-3.87 3.87-3.87s3.86 1.73 3.87 3.87c0 2.14-1.73 3.87-3.87 3.87s-3.87-1.74-3.87-3.87Zm7.871-4.886 1.211-1.208.883.885-1.21 1.208-.884-.885Zm-8.893 8.89-1.21 1.208.883.885 1.21-1.208-.883-.884Zm8.89.877.883-.884 1.21 1.208-.884.885-1.21-1.209ZM2.754 1.936l-.883.885 1.21 1.208.883-.884-1.21-1.209ZM8.6.04H7.35v1.71H8.6V.04ZM7.35 14.33H8.6v1.71H7.35v-1.71Zm8.63-6.91h-1.71v1.25h1.71V7.42Zm-16 0h1.71v1.25H-.02V7.42Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSunIcon;
