import * as React from 'react';
import { SVGProps } from 'react';

function SvgExerciseGlyphSecondary(props: SVGProps<SVGSVGElement>) {
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
        d="M12.94 26.73H8.75c-.41 0-.75.34-.75.75v11.77c0 .41.34.75.75.75h4.19c.41 0 .75-.34.75-.75V27.48c0-.41-.34-.75-.75-.75Zm-.75 11.77H9.5V28.23h2.69V38.5ZM39.25 26.73h-4.19c-.41 0-.75.34-.75.75v11.77c0 .41.34.75.75.75h4.19c.41 0 .75-.34.75-.75V27.48c0-.41-.34-.75-.75-.75ZM38.5 38.5h-2.69V28.23h2.69V38.5Z"
        fill="currentColor"
      />
      <path
        d="M36.41 22.27v2.78c0 .41.34.75.75.75s.75-.34.75-.75v-2.78C37.91 13.07 34 8 26.89 8c-3.37 0-6.25 1.47-8.22 3.93-4.26.74-8.58 4.43-8.58 12.99 0 .41.34.75.75.75s.75-.34.75-.75c0-6.61 2.69-9.94 5.86-11.12-1.01 1.92-1.58 4.23-1.58 6.78 0 4.34 2.16 10.81 8.13 10.81 4.41 0 7.05-3.35 7.05-8.97 0-2.45-.74-10.34-10.16-10.62 1.6-1.45 3.67-2.29 6.01-2.29 7.86-.01 9.51 6.93 9.51 12.76Zm-6.86.15c0 2.79-.72 7.47-5.55 7.47s-6.63-5.71-6.63-9.31c0-2.85.79-5.35 2.15-7.25.28-.03.56-.04.84-.04 8.29-.01 9.19 6.38 9.19 9.13Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgExerciseGlyphSecondary;
