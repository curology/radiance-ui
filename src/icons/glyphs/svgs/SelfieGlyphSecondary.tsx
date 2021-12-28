import * as React from 'react';
import { SVGProps } from 'react';

function SvgSelfieGlyphSecondary(props: SVGProps<SVGSVGElement>) {
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
        d="M31.58 19.73c0-4.18-3.4-7.58-7.58-7.58s-7.58 3.4-7.58 7.58c0 3.93 3 7.16 6.83 7.54v7.56C22.17 33 20.38 31.04 17.42 30a.763.763 0 0 0-.96.46c-.14.39.07.82.46.96 5.56 1.94 6.38 7.68 6.41 7.93.05.37.37.65.75.65h.01c.38 0 .7-.29.74-.67.01-.06.67-5.96 6.25-7.91.39-.14.6-.56.46-.96a.759.759 0 0 0-.96-.46c-3.03 1.06-4.8 3.08-5.83 4.95v-7.68a7.579 7.579 0 0 0 6.83-7.54Zm-13.66 0A6.09 6.09 0 0 1 24 13.65a6.09 6.09 0 0 1 6.08 6.08c0 3.1-2.33 5.66-5.33 6.03v-5.55c0-.41-.34-.75-.75-.75s-.75.34-.75.75v5.55c-3-.37-5.33-2.93-5.33-6.03ZM35.85 13.57a1.419 1.419 0 1 0-2.838-.002 1.419 1.419 0 0 0 2.838.002Z"
        fill="currentColor"
      />
      <path
        d="M38.3 8H9.7C8.76 8 8 8.76 8 9.7v20.07c0 .94.76 1.7 1.7 1.7h3.9c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H9.7a.2.2 0 0 1-.2-.2V9.7c0-.11.09-.2.2-.2h28.6c.11 0 .2.09.2.2v20.07a.2.2 0 0 1-.2.2h-3.96c-.41 0-.75.34-.75.75s.34.75.75.75h3.96c.94 0 1.7-.76 1.7-1.7V9.7c0-.94-.76-1.7-1.7-1.7Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSelfieGlyphSecondary;
