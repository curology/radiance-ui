import * as React from 'react';
import { SVGProps } from 'react';

function SvgMoisturizerGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M28 13.931c-.089-2.575-7.911-2.575-8 0v20.046C20 35.264 22.044 36 24 36s4-.736 4-2.023V13.931Zm-6.844 0c.088-.276 1.066-.828 2.844-.828 1.778 0 2.756.552 2.844.828 0 .184-1.066.828-2.933.828-1.867 0-2.844-.552-2.755-.828-.09 0 0 0 0 0ZM24 34.805c-1.778 0-2.844-.552-2.933-.828v-10.39c.8.367 1.866.55 2.933.55 1.067 0 2.133-.183 2.933-.55v10.39c-.089.276-1.155.828-2.933.828Zm0-11.77c-1.867 0-2.933-.644-2.933-.828v-6.805c.8.368 1.866.552 2.933.552 1.067 0 2.133-.184 2.933-.552v6.805c0 .184-1.066.828-2.933.828Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMoisturizerGlyph;
