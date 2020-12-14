import * as React from 'react';

function SvgPhoneIconSecondary(props: React.SVGProps<SVGSVGElement>) {
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
        d="M8.38 13.78a.88.88 0 100-1.76.88.88 0 000 1.76zM9.63 4.32c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H7.14c-.41 0-.75.34-.75.75s.34.75.75.75h2.49z"
        fill="currentColor"
      />
      <path
        d="M13.77 10.65v-9c0-.91-.75-1.65-1.66-1.65H4.65C3.74 0 3 .74 3 1.65V8c0 .41.34.75.75.75s.75-.34.75-.75V1.65c0-.08.07-.15.15-.15h7.46c.08 0 .15.07.15.15V9.9H3.75c-.41 0-.75.33-.75.75v3.7c0 .91.74 1.65 1.65 1.65h7.46c.91 0 1.65-.74 1.65-1.65V13.3c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.05c0 .08-.07.15-.15.15H4.65c-.08 0-.15-.07-.15-.15V11.4h8.52c.41 0 .75-.34.75-.75z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPhoneIconSecondary;
