import * as React from 'react';
import { SVGProps } from 'react';

function SvgGiftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Gift Icon</title>
      <path
        d="M16.02 5.17h-2.43c.46-.55.75-1.24.75-2.01 0-1.73-1.41-3.14-3.14-3.14-1.2 0-2.28.72-3.16 1.64C7.16.74 6.09.02 4.88.02c-1.73 0-3.14 1.41-3.14 3.14 0 .77.29 1.46.75 2.01H0v1.25h2.09l-.02 9.6h11.9l.02-9.6h2.02V5.17h.01Zm-7.98-.11c-.28 0-.58 0-.87-.01.24-.43.53-.92.87-1.4.34.48.64.97.87 1.4-.29.01-.59.01-.87.01Zm3.16-3.78c1.04 0 1.88.84 1.88 1.88s-.84 1.88-1.88 1.88h-.88c-.26-.52-.76-1.47-1.47-2.42.71-.76 1.52-1.34 2.35-1.34Zm-6.32 0c.83 0 1.64.58 2.35 1.35-.71.94-1.21 1.89-1.47 2.42h-.88C3.84 5.05 3 4.21 3 3.17s.85-1.89 1.88-1.89ZM3.34 6.43h4.08l-.01 8.35H3.33l.01-8.35Zm9.39 8.35H8.67l.01-8.35h4.06l-.01 8.35Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgGiftIcon;
