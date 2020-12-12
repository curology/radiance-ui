import * as React from 'react';

function SvgLightningIconSecondary(props: React.SVGProps<SVGSVGElement>) {
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
        d="M8 16a.76.76 0 01-.72-.53L5.03 8.22a.753.753 0 01.72-.97h3.48L7.28.97c-.12-.4.1-.82.49-.94.4-.12.82.1.94.49l2.25 7.25c.08.24.04.48-.11.68-.14.19-.37.3-.6.3H6.77l1.95 6.28c.12.4-.1.82-.49.94A.97.97 0 018 16z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLightningIconSecondary;
