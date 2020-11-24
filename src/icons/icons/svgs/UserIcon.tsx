import * as React from 'react';

function SvgUserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.88 10.22a5.77 5.77 0 002.02-4.4 5.82 5.82 0 10-11.64 0c0 1.76.77 3.33 2 4.39-1.61 1.04-2.56 2.82-2.56 5.04v.62h12.74v-.62c0-2.22-.95-3.99-2.56-5.03zm-8.37-4.4c0-2.52 2.05-4.57 4.57-4.57 2.52 0 4.57 2.05 4.57 4.57 0 1.57-.8 2.96-2.01 3.78-.73.5-1.61.79-2.56.79s-1.84-.29-2.57-.8c-1.21-.82-2-2.2-2-3.77zm-.53 8.8c.18-1.67 1.05-2.94 2.44-3.62.8.41 1.7.64 2.66.64.96 0 1.86-.23 2.65-.64 1.38.68 2.25 1.95 2.43 3.62H2.98z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgUserIcon;
