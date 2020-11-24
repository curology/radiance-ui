import * as React from 'react';

function SvgContrastIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.96.04c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zM14.7 7.9l-6.12 6.12v-1.85l5.89-5.89c.14.52.22 1.06.23 1.62zm-.72-2.89l-5.4 5.4V8.56l4.68-4.68c.28.35.52.73.72 1.13zM12.4 2.97L8.58 6.79V4.94l2.75-2.75c.38.23.74.49 1.07.78zm-2.29-1.31L8.58 3.19V1.33c.59.06 1.16.19 1.69.39a.523.523 0 00-.16-.06zM1.2 8.04c0-3.51 2.7-6.41 6.13-6.72v13.45C3.9 14.45 1.2 11.56 1.2 8.04zm8.64 6.48l4.6-4.6a6.77 6.77 0 01-4.6 4.6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgContrastIcon;
