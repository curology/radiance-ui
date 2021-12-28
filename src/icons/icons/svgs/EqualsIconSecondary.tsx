import * as React from 'react';
import { SVGProps } from 'react';

function SvgEqualsIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Equals Icon</title>
      <path
        d="M11.331 5.625H4.678a.688.688 0 0 0-.683.682c0 .373.31.683.683.683h6.653c.373 0 .683-.31.683-.683a.688.688 0 0 0-.683-.682ZM11.331 9.02H4.678a.688.688 0 0 0-.683.682c0 .373.31.682.683.682h6.653c.373 0 .683-.309.683-.682a.688.688 0 0 0-.683-.683Z"
        fill="currentColor"
      />
      <path
        d="M8 0C3.586 0 0 3.586 0 8s3.586 8 8 8 8-3.586 8-8c.01-4.414-3.586-8-8-8Zm0 14.635A6.642 6.642 0 0 1 1.365 8 6.642 6.642 0 0 1 8 1.365 6.642 6.642 0 0 1 14.635 8c.009 3.659-2.976 6.635-6.635 6.635Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgEqualsIconSecondary;
