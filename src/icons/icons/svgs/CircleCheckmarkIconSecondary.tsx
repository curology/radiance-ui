import * as React from 'react';

function SvgCircleCheckmarkIconSecondary(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 16c-4.414 0-8-3.586-8-8s3.586-8 8-8 8 3.586 8 8-3.586 8-8 8zM8 1.365A6.642 6.642 0 001.365 8 6.642 6.642 0 008 14.635 6.642 6.642 0 0014.635 8 6.642 6.642 0 008 1.365z"
        fill="currentColor"
      />
      <path
        d="M7.281 12.332a.683.683 0 01-.673-.546c-.019-.082-.456-2.111-2.394-2.512a.697.697 0 01-.528-.81.674.674 0 01.81-.528c1.21.255 2.02.929 2.54 1.62.545-1.793 1.729-4.341 4.268-5.788a.682.682 0 01.928.255.682.682 0 01-.255.928c-3.495 2.002-4.023 6.717-4.023 6.762a.675.675 0 01-.646.61c-.009.01-.018.01-.027.01z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCircleCheckmarkIconSecondary;
