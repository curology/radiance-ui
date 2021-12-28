import * as React from 'react';
import { SVGProps } from 'react';

function SvgCircleCheckmarkIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Circle Checkmark Icon</title>
      <path
        d="M8 16c-4.414 0-8-3.586-8-8s3.586-8 8-8 8 3.586 8 8-3.586 8-8 8ZM8 1.365A6.642 6.642 0 0 0 1.365 8 6.642 6.642 0 0 0 8 14.635 6.642 6.642 0 0 0 14.635 8 6.642 6.642 0 0 0 8 1.365Z"
        fill="currentColor"
      />
      <path
        d="M7.281 12.332a.683.683 0 0 1-.673-.546c-.019-.082-.456-2.111-2.394-2.512a.697.697 0 0 1-.528-.81.674.674 0 0 1 .81-.528c1.21.255 2.02.929 2.54 1.62.545-1.793 1.729-4.341 4.268-5.788a.682.682 0 0 1 .928.255.682.682 0 0 1-.255.928c-3.495 2.002-4.023 6.717-4.023 6.762a.675.675 0 0 1-.646.61c-.009.01-.018.01-.027.01Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCircleCheckmarkIconSecondary;
