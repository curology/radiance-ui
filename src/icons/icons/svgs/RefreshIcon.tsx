import * as React from 'react';

function SvgRefreshIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12.85 1.31H2.72v3.33H1.47V.06H14.1v7.92l1-.99.88.89-2.5 2.45-2.58-2.59.88-.89 1.07 1.07V1.31zm-9.7 13.43h9.7v-3.33h1.25v4.58H1.9v-7.7l-.98.96-.87-.89 2.49-2.44L5.13 8.5l-.89.89L3.15 8.3v6.44z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgRefreshIcon;
