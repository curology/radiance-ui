import * as React from 'react';

function SvgCameraSelectedNavIconSecondary(
  props: React.SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.005 6.421a2.901 2.901 0 00-2.897 2.897c0 1.6 1.305 2.896 2.897 2.896A2.908 2.908 0 0012.9 9.318a2.901 2.901 0 00-2.896-2.897z"
        fill="currentColor"
      />
      <path
        d="M18.914 2H1.096C.496 2 0 2.495 0 3.096v12.453c0 .61.495 1.096 1.096 1.096h17.808c.61 0 1.096-.495 1.096-1.096V3.096c.01-.6-.486-1.096-1.086-1.096zm-8.91 11.653A4.335 4.335 0 015.68 9.327a4.329 4.329 0 014.326-4.326 4.335 4.335 0 014.325 4.326 4.335 4.335 0 01-4.325 4.326zm6.242-6.956a.98.98 0 01-.982-.981.98.98 0 01.982-.981.98.98 0 01.981.981.98.98 0 01-.981.981z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCameraSelectedNavIconSecondary;
