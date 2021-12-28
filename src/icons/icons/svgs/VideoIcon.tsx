import * as React from 'react';
import { SVGProps } from 'react';

function SvgVideoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Video Icon</title>
      <path
        d="M12.84 5.31V1.2H.02v13.46h12.81v-3.88L16 12.6V3.48l-3.16 1.83Zm-1.25 8.1H1.27V2.45h10.31V13.41h.01Zm3.16-5.37v2.39l-1.91-1.1V6.75l1.91-1.1v2.39Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgVideoIcon;
