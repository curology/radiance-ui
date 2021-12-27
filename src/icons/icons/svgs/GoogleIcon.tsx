import * as React from 'react';
import { SVGProps } from 'react';

function SvgGoogleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Google Icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00006 3.09333C9.50228 3.09333 10.5156 3.74222 11.0934 4.28444L13.3512 2.08C11.9645 0.791111 10.1601 0 8.00006 0C4.87117 0 2.16895 1.79556 0.853394 4.40889L3.44006 6.41778C4.08895 4.48889 5.8845 3.09333 8.00006 3.09333Z"
        fill="#EA4335"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.68 8.17779C15.68 7.52001 15.6267 7.04001 15.5111 6.54224H8V9.51113H12.4089C12.32 10.2489 11.84 11.36 10.7733 12.1067L13.2978 14.0622C14.8089 12.6667 15.68 10.6133 15.68 8.17779Z"
        fill="#4285F4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.44889 9.58221C3.28 9.08443 3.18222 8.5511 3.18222 7.99999C3.18222 7.44887 3.28 6.91554 3.44 6.41776L0.853333 4.40887C0.311111 5.49332 0 6.7111 0 7.99999C0 9.28887 0.311111 10.5067 0.853333 11.5911L3.44889 9.58221Z"
        fill="#FBBC05"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99996 16C10.16 16 11.9733 15.2889 13.2977 14.0622L10.7733 12.1067C10.0977 12.5778 9.19107 12.9067 7.99996 12.9067C5.88441 12.9067 4.08885 11.5111 3.44885 9.58221L0.862183 11.5911C2.17774 14.2044 4.87107 16 7.99996 16Z"
        fill="#34A853"
      />
    </svg>
  );
}

export default SvgGoogleIcon;
