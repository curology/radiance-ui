import * as React from 'react';
import { SVGProps } from 'react';

function SvgSparkleEmoji(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Sparkle Emoji</title>
      <path
        d="M35.61 12.853 23.72 8l-10.802 4.332L9 20.077 24.403 40 39 20.914l-3.39-8.06Zm1.343 6.508h-5.282l-1.737-5.282h4.796l2.223 5.282ZM24.186 37.61 11.057 20.64h19.218l-6.089 16.97Zm2.884-24.807H15.172l8.394-3.361 3.504 3.361Zm-.486-2.258 5.51 2.248h-3.173l-2.337-2.248ZM13.476 14.08h14.917l.249.245 1.664 5.048H10.799l2.677-5.293ZM26.41 35.25l5.251-14.61h5.841l.031.081L26.41 35.25Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSparkleEmoji;
