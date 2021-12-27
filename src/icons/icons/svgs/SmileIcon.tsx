import * as React from 'react';
import { SVGProps } from 'react';

function SvgSmileIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Smile Icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.01001 16.04C3.60001 16.04 0.0100098 12.45 0.0100098 8.04004C0.0100098 3.63004 3.60001 0.0400391 8.01001 0.0400391C12.42 0.0400391 16.01 3.63004 16.01 8.04004C16.01 12.45 12.42 16.04 8.01001 16.04ZM8.01001 1.29004C4.28001 1.29004 1.26001 4.32005 1.26001 8.05005C1.26001 11.78 4.29001 14.8 8.01001 14.8C11.74 14.8 14.77 11.77 14.77 8.05005C14.77 4.33005 11.74 1.29004 8.01001 1.29004ZM5.64001 6.56006C5.64001 7.11234 5.1923 7.56006 4.64001 7.56006C4.08773 7.56006 3.64001 7.11234 3.64001 6.56006C3.64001 6.00777 4.08773 5.56006 4.64001 5.56006C5.1923 5.56006 5.64001 6.00777 5.64001 6.56006ZM12.26 6.56006C12.26 7.11234 11.8123 7.56006 11.26 7.56006C10.7077 7.56006 10.26 7.11234 10.26 6.56006C10.26 6.00777 10.7077 5.56006 11.26 5.56006C11.8123 5.56006 12.26 6.00777 12.26 6.56006ZM3.53003 9.35988C4.66003 10.9399 6.28003 11.8399 7.98003 11.8399H7.99004C9.67004 11.8299 11.21 10.9399 12.34 9.34988L11.32 8.62988C10.43 9.88988 9.25004 10.5799 7.99004 10.5899H7.98003C6.69003 10.5899 5.44002 9.87988 4.54002 8.62988L3.53003 9.35988Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSmileIcon;
