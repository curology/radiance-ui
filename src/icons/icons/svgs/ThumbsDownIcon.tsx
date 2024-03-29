import * as React from 'react';
import { SVGProps } from 'react';

function SvgThumbsDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.89 16c-.91 0-1.67-.65-1.85-1.57-.37-1.89-1.13-4.15-2.66-4.15-1.36 0-2.38-.21-3.12-.63C.4 9.16-.06 8.37-.05 7.36L-.04.98l4.71.01-.01 8.05c1.76.16 2.97 1.89 3.61 5.15.07.33.32.56.62.56.34 0 .63-.28.63-.62l.02-3.43c0-.31.12-.59.34-.81.22-.21.5-.33.81-.33h.01l2.08.02h.01c.67 0 1.17-.08 1.5-.24.33-.16.46-.38.46-.75 0-.24-.06-.54-.54-.75a.827.827 0 0 1-.48-.78c.01-.33.23-.62.54-.73.51-.18.51-.44.51-.56 0-.36-.13-.48-.33-.56a.781.781 0 0 1-.5-.68c-.02-.32.13-.61.41-.78.33-.19.38-.64.38-.89 0-.29-.18-.49-.32-.61-.22-.18-.5-.28-.77-.28-.4 0-.88-.01-1.38-.03-.53-.01-1.07-.03-1.57-.03l-1.69.03c-.57 0-1.85.19-1.85 1.98H5.91C5.91 1.96 7.13.69 9 .69h.01L10.7.66c.52 0 1.07.01 1.61.03.48.01.95.03 1.34.03.55 0 1.12.21 1.56.57.5.41.78.98.78 1.58 0 .61-.18 1.15-.5 1.54.36.33.54.8.54 1.37 0 .55-.23 1.02-.65 1.36.4.38.62.88.62 1.46 0 .86-.41 1.51-1.17 1.88-.51.24-1.16.36-2.04.36h-.02l-1.98-.02-.02 3.33A1.885 1.885 0 0 1 8.89 16ZM1.2 2.23l-.01 5.13c0 .56.21.93.69 1.2.37.21.88.35 1.52.42l.01-6.74-2.21-.01Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgThumbsDownIcon;
