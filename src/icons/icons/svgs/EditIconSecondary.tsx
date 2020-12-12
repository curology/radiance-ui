import * as React from 'react';

function SvgEditIconSecondary(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12.81 12.46c.12.12.29.2.46.22l1.75.16h.07a.753.753 0 00.75-.82l-.16-1.75a.74.74 0 00-.22-.46L5.87.22a.754.754 0 00-1.06 0L3.23 1.8c-.29.29-.29.77 0 1.06l9.58 9.6zm.24-2.94l-.52.53-5.94-5.94.52-.52 5.94 5.93zm.63 1.68l-.1-.1.52-.53.1.1.05.58-.57-.05zM5.34 1.81l.71.71-.52.53-.71-.72.52-.52zM15.24 14.49H.75c-.41 0-.75.34-.75.75s.34.75.75.75h14.49c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgEditIconSecondary;
