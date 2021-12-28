import * as React from 'react';
import { SVGProps } from 'react';

function SvgOverwhelmedEmoji(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.48 17.07c0 .77-.27 1.47-.7 2.03.5 1.54.77 3.19.76 4.89 0 8.84-7.16 16-16 16s-16-7.16-16-16 7.16-16 16-16c4.42 0 8.42 1.79 11.31 4.68.35-.52.64-.92.78-1.1l.5-.66.5.66c.48.64 2.85 3.87 2.85 5.5Zm-3.76-3.44c-.24.37-.48.74-.7 1.12-.55.93-.98 1.83-.99 2.32a2.091 2.091 0 0 0 3.29 1.72 2.097 2.097 0 0 0 .9-1.72c0-.76-1.1-2.63-2.09-4.05-.13.19-.27.4-.41.61ZM8.8 23.99c0 8.13 6.62 14.75 14.75 14.75 8.13 0 14.75-6.61 14.75-14.74 0-1.39-.21-2.73-.57-4-.48.26-1.02.42-1.6.42-1.84 0-3.34-1.51-3.34-3.35 0-.86.66-2.17 1.36-3.31-2.68-2.78-6.44-4.52-10.6-4.52-8.13 0-14.75 6.62-14.75 14.75Zm7.092-1.738-3.551 2.203.659 1.062 3.552-2.203-.66-1.063Zm1.218 6.158c-.21-.64-.8-1.08-1.48-1.08-.62 0-1.19.37-1.43.95l-1.15-.49a2.793 2.793 0 0 1 2.58-1.71c1.22 0 2.3.78 2.67 1.95l-1.19.38Zm12.689-5.091.66-1.062 3.55 2.204-.659 1.062L29.8 23.32Zm-.549 5.091-1.19-.38a2.794 2.794 0 0 1 2.67-1.95c1.13 0 2.14.67 2.58 1.71l-1.15.49c-.24-.58-.8-.95-1.43-.95-.68 0-1.27.43-1.48 1.08Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgOverwhelmedEmoji;
