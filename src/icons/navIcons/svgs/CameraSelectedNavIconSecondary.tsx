import * as React from 'react';
import { SVGProps } from 'react';

function SvgCameraSelectedNavIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Camera Selected Nav Icon</title>
      <path
        d="M10.005 6.421a2.901 2.901 0 0 0-2.897 2.897c0 1.6 1.305 2.896 2.897 2.896A2.908 2.908 0 0 0 12.9 9.318a2.901 2.901 0 0 0-2.896-2.897Z"
        fill="currentColor"
      />
      <path
        d="M18.914 2H1.096C.496 2 0 2.495 0 3.096v12.453c0 .61.495 1.096 1.096 1.096h17.808c.61 0 1.096-.495 1.096-1.096V3.096c.01-.6-.486-1.096-1.086-1.096Zm-8.91 11.653A4.335 4.335 0 0 1 5.68 9.327a4.329 4.329 0 0 1 4.326-4.326 4.335 4.335 0 0 1 4.325 4.326 4.335 4.335 0 0 1-4.325 4.326Zm6.242-6.956a.98.98 0 0 1-.982-.981.98.98 0 0 1 .982-.981.98.98 0 0 1 .981.981.98.98 0 0 1-.981.981Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCameraSelectedNavIconSecondary;
