import * as React from 'react';
import { SVGProps } from 'react';

function SvgCircleCheckmarkIcon(props: SVGProps<SVGSVGElement>) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.7081 7.95031C14.7081 4.17391 11.6273 1.19255 7.95031 1.19255C4.27329 1.19255 1.19255 4.17391 1.19255 7.95031C1.19255 11.7267 4.17391 14.7081 7.95031 14.7081C11.7267 14.7081 14.7081 11.7267 14.7081 7.95031ZM0 7.95031C0 3.57764 3.57764 0 7.95031 0C12.4224 0 15.9006 3.57764 15.9006 7.95031C15.9006 12.323 12.323 15.9006 7.95031 15.9006C3.57764 15.9006 0 12.323 0 7.95031ZM6.30837 11.6686L13.3643 4.51336L12.4742 3.63568L5.8671 10.3359L3.13192 7.51521L2.23454 8.38539L5.41466 11.6649L5.8596 12.1237L6.30837 11.6686Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCircleCheckmarkIcon;
