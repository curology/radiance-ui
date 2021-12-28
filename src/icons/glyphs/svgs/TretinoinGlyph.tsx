import * as React from 'react';
import { SVGProps } from 'react';

function SvgTretinoinGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Tretinoin Glyph</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.454 10.026 17.096 10l-.203.295L8.204 22.94 8 23.236l.155.325 6.592 13.848.155.326.36.028 15.281 1.204.36.029.204-.298 8.69-12.643.203-.296-.153-.325-6.592-13.948-.156-.33-.364-.026-15.281-1.104ZM9.439 23.349 17.72 11.3l14.56 1.051 6.282 13.293-8.281 12.05-14.562-1.148L9.44 23.35Zm19.401 2.068 4.451 2.946-.632.963-1.71-1.133-2.824 4.306-1.028-.681 2.823-4.305-1.711-1.133.631-.963ZM22.9 14.716l.542.94 3.296 5.72.54.936h-8.755l.54-.937 3.296-5.72.542-.94Zm0 2.503-2.213 3.843h4.428l-2.214-3.843Zm.091 11.297.364-1.04-1.08.222-3.895.802-1.062.22.722.809 2.597 2.91.706.791.35-1.001 1.298-3.713Zm-2.128 2.3-1.168-1.31 1.753-.361-.585 1.67Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTretinoinGlyph;
