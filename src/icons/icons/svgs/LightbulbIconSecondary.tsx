import * as React from 'react';

function SvgLightbulbIconSecondary(props: React.SVGProps<SVGSVGElement>) {
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
        d="M8.41 0h-.12C4.82 0 3 2.47 3 4.9c0 1.79.73 3.24 2.18 4.31.87.64.94 1.03.94 1.4 0 .41.34.75.75.75s.75-.34.75-.75c0-1.02-.46-1.8-1.55-2.6C5 7.21 4.5 6.23 4.5 4.9c0-1.64 1.19-3.4 3.79-3.4h.11c2.38 0 3.79 1.73 3.79 3.4 0 1.68-1.04 2.66-1.66 3.1-1.29.9-1.46 1.81-1.46 2.57 0 .41.34.75.75.75s.75-.34.75-.75c0-.38 0-.76.82-1.34 1.46-1.02 2.3-2.6 2.3-4.32C13.7 2.49 11.72 0 8.41 0zM9.87 12.5H6.83c-.41 0-.75.34-.75.75v1.99c0 .41.34.75.75.75h3.04c.41 0 .75-.34.75-.75v-1.99c0-.42-.34-.75-.75-.75zm-.75 1.99H7.58V14h1.54v.49z"
        fill="currentColor"
      />
      <path
        d="M9.09 7.25v-2.8a.749.749 0 10-1.5 0v2.8c0 .41.34.75.75.75s.75-.34.75-.75z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLightbulbIconSecondary;
