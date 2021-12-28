import * as React from 'react';
import { SVGProps } from 'react';

function SvgPlayIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.752 16c-.14 0-.27-.04-.39-.11a.742.742 0 0 1-.36-.64V4c0-.41.34-.75.75-.75s.75.34.75.75v10.04L14.572 8 1.412 1.42a.75.75 0 0 1-.33-1.01c.18-.37.64-.51 1.01-.33l14.5 7.25c.25.13.41.39.41.67s-.16.54-.41.67l-14.5 7.25c-.11.05-.23.08-.34.08Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPlayIconSecondary;
