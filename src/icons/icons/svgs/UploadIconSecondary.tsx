import * as React from 'react';

function SvgUploadIconSecondary(props: React.SVGProps<SVGSVGElement>) {
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
        d="M2.78 6.19c2.11 0 3.54-1.19 4.47-2.44v7.51c0 .41.34.75.75.75s.75-.34.75-.75V3.91c.99 1.21 2.45 2.23 4.47 2.23.41 0 .75-.34.75-.75s-.34-.75-.75-.75C9.76 4.64 8.73.74 8.69.57A.757.757 0 007.98 0c-.3-.01-.64.21-.73.54-.02.04-1.26 4.15-4.47 4.15a.749.749 0 100 1.5z"
        fill="currentColor"
      />
      <path
        d="M15.25 8.6c-.41 0-.75.34-.75.75v5.14h-13V9.35c0-.41-.34-.75-.75-.75S0 8.94 0 9.35v5.45c0 .67.54 1.2 1.2 1.2h13.6c.66 0 1.2-.53 1.2-1.19V9.35c0-.41-.34-.75-.75-.75z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgUploadIconSecondary;
