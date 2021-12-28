import * as React from 'react';
import { SVGProps } from 'react';

function SvgTimeSometimesGlyph(props: SVGProps<SVGSVGElement>) {
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
        d="M31.11 8c2.416 0 4.38 2.076 4.38 4.63H40V40H8V12.63h2.997c0-2.553 1.964-4.629 4.38-4.629 2.414 0 4.379 2.076 4.379 4.63h6.975c0-2.554 1.964-4.63 4.38-4.63Zm0 1.324c-1.723 0-3.126 1.483-3.126 3.305h6.253c0-1.822-1.403-3.305-3.126-3.305Zm-15.734 0c-1.724 0-3.127 1.483-3.127 3.305h6.254c0-1.822-1.403-3.305-3.127-3.305ZM9.253 38.687h29.494V20.076H9.253v18.61Zm0-19.967h29.474v-4.767H35.29c-.401 1.44-1.444 2.606-2.846 3.082l-.381-1.26c.882-.297 1.553-.975 1.904-1.822H19.565c-.4 1.44-1.443 2.606-2.846 3.082l-.38-1.26c.881-.297 1.553-.975 1.903-1.822h-8.99v4.767Zm9.44 8.082.882.932-4.44 4.692-2.084-2.192.882-.943 1.203 1.271 3.557-3.76Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTimeSometimesGlyph;
