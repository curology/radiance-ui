import * as React from 'react';
import { SVGProps } from 'react';

function SvgLocationIconSecondary(props: SVGProps<SVGSVGElement>) {
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
        d="M7.89 0C5.1 0 3 2.18 3 5.08c0 1.61.95 3.61 1.79 5.37.14.3.28.59.41.87l2.02 4.25c.12.27.39.43.67.43.11 0 .22-.02.32-.07.37-.18.53-.62.36-1l-2.01-4.24c-.13-.28-.27-.57-.41-.88C5.41 8.27 4.5 6.35 4.5 5.08 4.5 3 5.93 1.5 7.89 1.5c2.03 0 3.39 1.42 3.39 3.54 0 1.65-.91 3.48-1.72 5.09l-.85 1.77c-.18.37-.02.82.35 1 .37.18.82.02 1-.35l.85-1.75c.84-1.67 1.88-3.75 1.88-5.76C12.78 2.07 10.77 0 7.89 0Z"
        fill="currentColor"
      />
      <path
        d="M9.86 5.17c0-1.09-.88-1.97-1.97-1.97-1.09 0-1.97.89-1.97 1.97s.88 1.97 1.97 1.97c1.09 0 1.97-.88 1.97-1.97Zm-1.97.47a.47.47 0 1 1-.001-.939.47.47 0 0 1 .001.939Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLocationIconSecondary;
