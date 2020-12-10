import * as React from 'react';

function SvgPreparedSelectedEmojiSecondary(
  props: React.SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      width={48}
      height={48}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M24 8C15.18 8 8 15.18 8 24s7.18 16 16 16 16-7.18 16-16S32.82 8 24 8zm6.41 22.38c-1.64 1.6-4 2.5-6.5 2.5h-.21c-2.42-.05-4.65-.97-6.12-2.52-.28-.3-.27-.78.03-1.06.3-.29.78-.27 1.06.03 1.19 1.26 3.04 2.01 5.06 2.05 2.19.05 4.24-.71 5.63-2.08.3-.29.77-.28 1.06.01.29.3.28.78-.01 1.07z"
        fill="#2D2A26"
      />
    </svg>
  );
}

export default SvgPreparedSelectedEmojiSecondary;
