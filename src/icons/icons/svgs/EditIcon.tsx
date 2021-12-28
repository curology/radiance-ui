import * as React from 'react';
import { SVGProps } from 'react';

function SvgEditIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Edit Icon</title>
      <path
        d="M14 .99a3.468 3.468 0 0 0-4.88.21L1.59 9.36.1 15.95l6.65-1.85 7.51-8.15c.63-.68.96-1.57.92-2.5-.03-.92-.43-1.78-1.18-2.46ZM2.54 10.85l2.63 2.4-3.38.94.75-3.34ZM13.36 5.1l-6.97 7.56-3.33-3.04 6.99-7.58c.82-.89 2.23-.95 3.18-.08.44.4.69.95.72 1.54.03.59-.19 1.17-.59 1.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgEditIcon;
