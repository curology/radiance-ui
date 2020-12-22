import * as React from 'react';

function SvgTemperatureIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M7.36 2.65c0-.77-.62-1.39-1.39-1.39-.76 0-1.38.62-1.37 1.4v5.45c0 .32-.15.63-.42.81-.92.63-1.51 1.72-1.38 2.98.13 1.29 1.1 2.42 2.36 2.74.28.07.55.1.82.1 1.66 0 3.06-1.28 3.19-2.96.08-1.19-.49-2.27-1.41-2.89a.972.972 0 01-.4-.8V2.65zm-4.03 0C3.33 1.19 4.52.01 5.97.01 7.43.01 8.61 1.2 8.6 2.65v5.31a4.47 4.47 0 011.8 3.91c-.17 2.31-2.12 4.12-4.43 4.12-.38 0-.76-.05-1.13-.14-1.76-.45-3.11-2.03-3.3-3.83-.16-1.6.5-3.11 1.79-4.05V2.65zm7.23-.62h3.58v1.25h-3.58V2.03zM14.14 8V6.75h-3.58V8h3.58zm-3.58-3.61h1.79v1.25h-1.79V4.39z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTemperatureIcon;
