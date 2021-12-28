import * as React from 'react';
import { SVGProps } from 'react';

function SvgTextureGlyph(props: SVGProps<SVGSVGElement>) {
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
        d="m23.917 19.366-7.661-7.643-7.38 7.555L8 18.42l8.246-8.42 7.652 7.632 7.35-7.613L40 18.012l-.818.906-7.876-7.204-7.389 7.652Zm0 9.15-7.661-7.632-7.38 7.545L8 27.582l8.246-8.43 7.652 7.632 7.35-7.613L40 27.173l-.818.896-7.876-7.204-7.389 7.652Zm-7.661 1.52 7.661 7.632 7.39-7.652 7.875 7.204.818-.895-8.752-8.003-7.35 7.613-7.652-7.623L8 36.733l.876.847 7.38-7.544Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTextureGlyph;
