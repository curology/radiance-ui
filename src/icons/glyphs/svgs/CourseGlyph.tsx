import * as React from 'react';
import { SVGProps } from 'react';

function SvgCourseGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Course Glyph</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.9862 14H17.3612V14.625V26.2799C15.5441 26.466 13.775 27.2694 12.3731 28.69L8 33.1217L8.88974 33.9997L13.2629 29.568C15.9998 26.7945 20.3702 26.7945 23.1071 29.568L27.0827 33.5968L27.9724 32.7188L25.0264 29.7333L25.2889 29.4673C28.0465 26.6728 32.2119 26.4145 35.1265 29.4604L35.1264 29.4605L35.1332 29.4673L39.1087 33.4961L39.9985 32.6181L36.0262 28.5927C32.5801 24.9949 27.6038 25.3418 24.3992 28.5893L24.1483 28.8435L23.9969 28.69C22.4929 27.1659 20.5663 26.3523 18.6112 26.2491V19.8831H24.3471H24.9721V19.2581V14.625V14H24.3471H17.9862ZM23.7221 18.6331H18.6112V15.25H23.7221V18.6331Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCourseGlyph;
