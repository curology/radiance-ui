import * as React from 'react';

function SvgUnsatisfiedSelectedEmojiSecondary(
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
        d="M24 8C15.18 8 8 15.18 8 24s7.18 16 16 16 16-7.18 16-16S32.82 8 24 8zm6.42 24.66c-.29.3-.76.3-1.06.01-1.39-1.36-3.45-2.13-5.63-2.08-2.02.04-3.87.79-5.06 2.05-.15.16-.35.24-.55.24a.71.71 0 01-.51-.21.755.755 0 01-.03-1.06c1.47-1.56 3.7-2.48 6.12-2.52 2.6-.06 5.03.86 6.71 2.5.29.29.3.77.01 1.07z"
        fill="#2D2A26"
      />
    </svg>
  );
}

export default SvgUnsatisfiedSelectedEmojiSecondary;
