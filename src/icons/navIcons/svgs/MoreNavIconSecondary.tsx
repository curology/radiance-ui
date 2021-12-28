import * as React from 'react';
import { SVGProps } from 'react';

function SvgMoreNavIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>More Nav Icon</title>
      <path
        d="M10.35 4.708A2.357 2.357 0 0 1 8 2.354 2.357 2.357 0 0 1 10.35 0a2.357 2.357 0 0 1 2.35 2.354 2.357 2.357 0 0 1-2.35 2.354Zm0-3.099a.741.741 0 0 0-.744.745c0 .414.33.745.744.745.413 0 .744-.34.744-.745a.747.747 0 0 0-.744-.745ZM10.35 12.35a2.349 2.349 0 1 1 0-4.7 2.349 2.349 0 1 1 0 4.699Zm0-3.09a.741.741 0 0 0-.744.745c0 .413.33.744.744.744a.741.741 0 0 0 .744-.744.741.741 0 0 0-.744-.745ZM10.35 20A2.357 2.357 0 0 1 8 17.646a2.357 2.357 0 0 1 2.35-2.354 2.357 2.357 0 0 1 2.35 2.354A2.357 2.357 0 0 1 10.35 20Zm0-3.099a.741.741 0 0 0-.744.745c0 .414.33.745.744.745a.741.741 0 0 0 .744-.745.741.741 0 0 0-.744-.745Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMoreNavIconSecondary;
