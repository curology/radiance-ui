import * as React from 'react';

function SvgSmileySelectedEmoji(props: React.SVGProps<SVGSVGElement>) {
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
        d="M24 8C15.16 8 8 15.16 8 24s7.16 16 16 16 16-7.16 16-16S32.84 8 24 8zm-7.13 15.14c-.65 0-1.18-.53-1.18-1.18 0-.65.53-1.18 1.18-1.18.65 0 1.18.53 1.18 1.18 0 .65-.52 1.18-1.18 1.18zm7.06 6.16c-2.75 0-5.24-1.74-6.19-4.33l1.17-.43a5.37 5.37 0 005.02 3.51 5.37 5.37 0 005.02-3.51l1.17.43a6.603 6.603 0 01-6.19 4.33zm7.43-6.16c-.65 0-1.18-.53-1.18-1.18 0-.65.53-1.18 1.18-1.18.65 0 1.18.53 1.18 1.18 0 .65-.53 1.18-1.18 1.18z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSmileySelectedEmoji;
