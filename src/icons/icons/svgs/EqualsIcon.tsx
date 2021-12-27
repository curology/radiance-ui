import * as React from 'react';
import { SVGProps } from 'react';

function SvgEqualsIcon(props: SVGProps<SVGSVGElement>) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.6918 7.94969C14.6918 4.22642 11.673 1.20755 7.94969 1.20755C4.32704 1.20755 1.20755 4.32704 1.20755 7.94969C1.20755 11.673 4.22642 14.6918 7.94969 14.6918C11.673 14.6918 14.6918 11.673 14.6918 7.94969ZM0 7.94969C0 3.62264 3.62264 0 7.94969 0C12.3774 0 16 3.62264 15.8994 7.94969C15.8994 12.2767 12.3774 15.8994 7.94969 15.8994C3.62264 15.8994 0 12.3774 0 7.94969ZM12.0755 6.76337H3.92453V5.51337H12.0755V6.76337ZM12.0755 10.6879H3.92453V9.4379H12.0755V10.6879Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgEqualsIcon;
