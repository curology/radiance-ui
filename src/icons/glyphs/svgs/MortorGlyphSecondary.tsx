import * as React from 'react';
import { SVGProps } from 'react';

function SvgMortorGlyphSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Mortor Glyph</title>
      <path
        d="M39.78 23.538a.75.75 0 0 0-.53-.22H11.79c-.41 0-.75.34-.75.75s.34.75.75.75h26.69c-.42 7.6-6.76 13.67-14.48 13.67-7.97 0-14.48-6.47-14.5-14.42 0-.42-.34-.76-.75-.75-.41 0-.75.34-.75.76.03 8.78 7.2 15.92 16 15.92s15.97-7.14 16-15.92c0-.2-.08-.39-.22-.54ZM17.94 21.908c.29.29.77.29 1.06-.01.29-.29.29-.77 0-1.06-3.24-3.21-8.36-8.28-8.88-8.8-.34-.33-1.04-1.37-.28-2.12.85-.85 1.73-.23 2.18.22l11.78 11.78c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06L13.08 9.078c-1.13-1.12-2.89-1.63-4.3-.22-1.29 1.29-.82 3.15.27 4.24.53.52 5.65 5.6 8.89 8.81Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMortorGlyphSecondary;
