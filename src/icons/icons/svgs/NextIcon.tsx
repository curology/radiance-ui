import * as React from 'react';

function SvgNextIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12.02 8.34L.77 16.04V.03l11.25 8.31zm-2.15-.03l-7.85-5.8v11.17l7.85-5.37zM14.74.05h1.25v16h-1.25v-16z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgNextIcon;
