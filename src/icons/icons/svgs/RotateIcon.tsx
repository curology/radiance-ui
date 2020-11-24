import * as React from 'react';

function SvgRotateIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M14.6 4.6l.19-.66 1.2.35-.82 2.84-2.98-.83.34-1.21 1.03.29a5.856 5.856 0 00-3.6-3.48c-1.49-.5-3.08-.4-4.49.29A5.83 5.83 0 002.5 5.57l-1.19-.41a7.11 7.11 0 013.61-4.11C6.63.21 8.56.08 10.37.7c1.92.65 3.43 2.08 4.23 3.9zM9.02 8.02a1.01 1.01 0 11-2.02 0 1.01 1.01 0 012.02 0zm2.53 5.27a5.792 5.792 0 01-4.38 1.03c-2.07-.33-3.8-1.77-4.54-3.69l.92.42.52-1.15-2.82-1.28L0 11.3l1.14.53.33-.71c.91 2.31 3 4.03 5.49 4.44.39.06.77.09 1.16.09 1.49 0 2.93-.46 4.16-1.35a7.078 7.078 0 002.87-4.65l-1.24-.2a5.85 5.85 0 01-2.36 3.84z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgRotateIcon;
