import * as React from 'react';
import { SVGProps } from 'react';

function SvgFineLinesGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Fine Lines Glyph</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 20.7159L20.5659 8L21.4834 8.93057L8.91752 21.6464L8 20.7159ZM9.72355 31.1431L31.0856 9.52613L32.0031 10.4567L10.6411 32.0737L9.72355 31.1431ZM37.5028 15.2007L15.4353 37.5315L16.3529 38.4621L38.4203 16.1313L37.5028 15.2007ZM25.9507 39.0694L39.0825 25.7809L40 26.7115L26.8683 39.9999L25.9507 39.0694Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFineLinesGlyph;
