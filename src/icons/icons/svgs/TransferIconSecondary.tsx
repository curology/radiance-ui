import * as React from 'react';
import { SVGProps } from 'react';

function SvgTransferIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Transfer Icon</title>
      <path
        d="M10.433 11.073H3.198c.72-.65 1.32-1.56 1.32-2.819a.69.69 0 0 0-.69-.69c-.38 0-.68.3-.68.68 0 2.01-2.638 2.819-2.658 2.829-.3.09-.5.36-.49.67.01.309.22.569.52.649.11.03 2.598.69 2.598 2.868a.69.69 0 0 0 1.38 0c0-1.22-.53-2.149-1.21-2.818h7.165c.38 0 .69-.31.69-.69a.72.72 0 0 0-.71-.68ZM15.47 3.548c-.11-.03-2.598-.69-2.598-2.868.01-.37-.3-.68-.68-.68a.69.69 0 0 0-.69.69c0 1.219.53 2.148 1.21 2.818H5.557a.69.69 0 0 0-.69.69c0 .379.31.689.69.689h7.235c-.72.65-1.32 1.559-1.32 2.818a.69.69 0 0 0 1.38 0c0-2.009 2.638-2.818 2.658-2.828.3-.09.5-.36.49-.67a.726.726 0 0 0-.53-.66Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTransferIconSecondary;
