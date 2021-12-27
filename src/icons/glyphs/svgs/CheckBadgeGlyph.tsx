import * as React from 'react';
import { SVGProps } from 'react';

function SvgCheckBadgeGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Check Badge Glyph</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 8H14.625H23.1387H32.3791H33.0041V8.625V30.6342V31.2592H32.3791H29.0587V38.5621V39.8102L28.0593 39.0625L23.5491 35.6882L18.627 39.2758L17.6339 39.9996V38.7707V31.2592H14.625H14V30.6342V8.625V8ZM18.8839 31.2592H27.8087V37.3139L23.9284 34.4108L23.5588 34.1343L23.1858 34.4062L18.8839 37.5418V31.2592ZM15.25 9.25V30.0092H31.7541V9.25H23.1387H15.25ZM22.757 22.829L26.4947 18.9696L25.5968 18.1L22.302 21.5021L20.986 20.18L20.1001 21.0619L21.8651 22.8351L22.3142 23.2863L22.757 22.829Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCheckBadgeGlyph;
