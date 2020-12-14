import * as React from 'react';

function SvgDownloadIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M11.36 7.106L8.625 9.823V0h-1.25v9.794L4.746 7.112l-.892.875 3.7 3.775.44.45.446-.444 3.8-3.775-.88-.887zM-.025 10.338v5.691h16.05v-5.493h-1.25v4.243H1.225v-4.441h-1.25z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDownloadIcon;
