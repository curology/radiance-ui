import * as React from 'react';

function SvgProfileNavIconSecondary(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.19 20a.81.81 0 01-.808-.81v-1.765c0-1.36-.451-2.979-2.584-2.979h-1.435c-1.774 0-3.016-1.03-3.016-2.492 0-.975.515-1.545.975-2.05.515-.57 1.002-1.113 1.002-2.465V5.002c0-2.345-1.692-3.393-3.365-3.393-1.334 0-3.32.929-3.32 3.485v2.134c0 1.498.487 2.032 1.002 2.602.46.506.975 1.085.975 2.124 0 1.223-1.122 2.492-3.007 2.492H4.193c-2.133 0-2.584 1.618-2.584 2.98v1.765A.81.81 0 01.8 20c-.45 0-.8-.359-.8-.8v-1.765c0-2.833 1.61-4.589 4.193-4.589h1.435c.92 0 1.397-.515 1.397-.883 0-.414-.165-.607-.56-1.048-.598-.662-1.417-1.563-1.417-3.687V5.094C5.048 1.784 7.586 0 9.977 0c2.878 0 4.975 2.106 4.975 5.002v2.446c0 1.977-.819 2.888-1.426 3.55-.386.423-.56.625-.56.965 0 .653.754.883 1.406.883h1.435c2.584 0 4.193 1.756 4.193 4.588V19.2c0 .441-.359.8-.81.8z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgProfileNavIconSecondary;
