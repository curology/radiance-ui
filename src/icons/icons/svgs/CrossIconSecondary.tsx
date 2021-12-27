import * as React from 'react';
import { SVGProps } from 'react';

function SvgCrossIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Cross Icon</title>
      <path
        d="M9.06 8L15.78 1.28C16.07 0.990002 16.07 0.510002 15.78 0.220002C15.49 -0.0699975 15.01 -0.0699975 14.72 0.220002L8 6.94L1.28 0.220002C0.990002 -0.0699975 0.510002 -0.0699975 0.220002 0.220002C-0.0699975 0.510002 -0.0699975 0.990002 0.220002 1.28L6.94 8L0.220002 14.72C-0.0699975 15.01 -0.0699975 15.49 0.220002 15.78C0.370002 15.93 0.560002 16 0.750002 16C0.940002 16 1.13 15.93 1.28 15.78L8 9.06L14.72 15.78C14.87 15.93 15.06 16 15.25 16C15.44 16 15.63 15.93 15.78 15.78C16.07 15.49 16.07 15.01 15.78 14.72L9.06 8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCrossIconSecondary;
