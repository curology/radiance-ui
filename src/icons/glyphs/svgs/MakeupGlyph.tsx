import * as React from 'react';

function SvgMakeupGlyph(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      height={48}
      viewBox="0 0 48 48"
      width={48}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M33.767 11.509h-2.044v2.338h3.5v1.25h-3.5v2.215h3.5v1.25h-3.5v2.586h2.044v1.25h-2.044v5.56h-1.25v-5.56h-2.044v-1.25h2.044v-2.586h-3.5v-1.25h3.5v-2.215h-3.5v-1.25h3.5V11.51h-2.044v-1.25h5.338zm-13.71 10.635V35.63h-4.125V22.143zm1.456-1.609h-7.037v16.58h7.037zm11.648 9.033v6.063h-4.004v-6.063zm1.456-1.609h-7.038v9.156h7.038z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgMakeupGlyph;
