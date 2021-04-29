import * as React from 'react';

function SvgTruckIconSecondary(props: React.SVGProps<SVGSVGElement>) {
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
        d="M14.2 3.04H8.13c-.41 0-.75.34-.75.75v6.07c0 .41.34.75.75.75h6.07c.41 0 .75-.34.75-.75V3.79c0-.41-.33-.75-.75-.75zm-.75 6.07H8.88V4.54h4.57v4.57zM3.77 12.45c-.97 0-1.77.79-1.77 1.77s.8 1.77 1.77 1.77 1.77-.8 1.77-1.77-.79-1.77-1.77-1.77zm-.27 1.77c0-.15.12-.27.27-.27.15 0 .27.12.27.27.01.3-.54.3-.54 0zM5.19 0H2.75C2.34 0 2 .34 2 .75s.34.75.75.75h1.69v9.09c0 .41.34.75.75.75s.75-.34.75-.75V.75c0-.41-.33-.75-.75-.75zM14.19 12.05H7.4c-.41 0-.75.34-.75.75s.34.75.75.75h6.78c.41 0 .75-.34.75-.75s-.33-.75-.74-.75z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTruckIconSecondary;
