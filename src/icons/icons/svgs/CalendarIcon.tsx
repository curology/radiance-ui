import * as React from 'react';
import { SVGProps } from 'react';

function SvgCalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Calendar Icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.87 0v.908c0 .188.155.34.347.34h4.638v1.135H5.217c-.832 0-1.507-.66-1.507-1.475V0h1.16Zm7.42 0v.908c0 .188.156.34.348.34H16V16H0V1.248h2.435v1.135H1.159v2.496h13.682V2.383h-2.203c-.833 0-1.508-.66-1.508-1.475V0h1.16Zm2.55 6.014H1.16v8.851h13.68v-8.85Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCalendarIcon;
