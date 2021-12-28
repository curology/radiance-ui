import * as React from 'react';
import { SVGProps } from 'react';

function SvgLockGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Lock Glyph</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.444 9.25c-3.704 0-6.683 2.972-6.683 6.658v6.275H31.24v-6.275c0-3.674-3.079-6.658-6.795-6.658Zm-7.933 6.658v6.275H15V40h19V22.183h-1.511v-6.275c0-4.393-3.667-7.908-8.045-7.908-4.39 0-7.933 3.527-7.933 7.908Zm16.14 7.62v15.014H16.349V23.528h16.302Zm-7.195 7.62c0-.561-.45-.897-.9-.897-.562 0-.9.336-.9.784s.338 1.009.9 1.009.9-.337.9-.897Zm-3.148-.113a2.251 2.251 0 0 1 2.248-2.24 2.251 2.251 0 0 1 2.249 2.24 2.251 2.251 0 0 1-2.249 2.241 2.251 2.251 0 0 1-2.248-2.24Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLockGlyph;
