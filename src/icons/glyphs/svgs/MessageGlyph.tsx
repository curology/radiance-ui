import * as React from 'react';
import { SVGProps } from 'react';

function SvgMessageGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Message Glyph</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.993 36h10.581l-1.686-3.945A11.954 11.954 0 0 0 36 23.993c0-3.403-1.456-6.656-3.996-8.935-2.58-2.309-5.893-3.363-9.366-2.982-5.512.613-9.95 5.05-10.562 10.562-.381 3.463.673 6.796 2.982 9.366A12 12 0 0 0 23.993 36Zm-1.215-22.669c.412-.05.824-.07 1.235-.07 2.65 0 5.15.944 7.158 2.74a10.766 10.766 0 0 1 3.574 8.002c0 2.811-1.084 5.471-3.052 7.49l-.291.3 1.275 2.952h-8.674a10.766 10.766 0 0 1-8.001-3.574c-2.068-2.309-3.012-5.29-2.67-8.393.541-4.929 4.517-8.904 9.446-9.447ZM19.496 25.62a.964.964 0 1 0 0-1.927.964.964 0 0 0 0 1.927Zm9.075 0a.964.964 0 1 0 0-1.927.964.964 0 0 0 0 1.927Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMessageGlyph;
