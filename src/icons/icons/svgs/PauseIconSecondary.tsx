import * as React from 'react';
import { SVGProps } from 'react';

function SvgPauseIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Pause Icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.56024 0C4.02992 0 3.60002 0.429902 3.60002 0.960214V15.0398C3.60002 15.5701 4.02992 16 4.56024 16C5.09055 16 5.52045 15.5701 5.52045 15.0398V0.960215C5.52045 0.429903 5.09055 0 4.56024 0ZM11.4189 0C10.8886 0 10.4587 0.429902 10.4587 0.960214V15.0398C10.4587 15.5701 10.8886 16 11.4189 16C11.9492 16 12.3791 15.5701 12.3791 15.0398V0.960215C12.3791 0.429903 11.9492 0 11.4189 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPauseIconSecondary;
