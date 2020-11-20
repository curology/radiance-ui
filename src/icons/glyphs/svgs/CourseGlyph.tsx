import * as React from 'react';

function SvgCourseGlyph(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.986 14h-.625v12.28a8.155 8.155 0 00-4.988 2.41L8 33.122l.89.878 4.373-4.432a6.864 6.864 0 019.844 0l3.976 4.029.89-.878-2.947-2.986.263-.266c2.758-2.794 6.923-3.052 9.837-.007l.007.007 3.976 4.03.89-.879-3.973-4.025c-3.446-3.598-8.422-3.251-11.627-.004l-.25.255-.152-.154a8.147 8.147 0 00-5.386-2.44v-6.367h6.361V14h-6.985zm5.736 4.633h-5.11V15.25h5.11v3.383z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCourseGlyph;
