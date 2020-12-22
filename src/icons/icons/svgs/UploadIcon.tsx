import * as React from 'react';

function SvgUploadIcon(props: React.SVGProps<SVGSVGElement>) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.282 4.288L8.06.066 3.838 4.288l.884.884 2.743-2.743v9.921h1.25V2.489l2.683 2.683.884-.884zM1.685 11.43h1.25v3.335h10.32V11.43h1.25v4.585H1.685V11.43z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgUploadIcon;
