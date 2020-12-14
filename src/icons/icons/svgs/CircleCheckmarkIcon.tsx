import * as React from 'react';

function SvgCircleCheckmarkIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M14.708 7.95c0-3.776-3.08-6.757-6.758-6.757-3.677 0-6.757 2.98-6.757 6.757 0 3.777 2.98 6.758 6.757 6.758 3.777 0 6.758-2.981 6.758-6.758zM0 7.95C0 3.578 3.578 0 7.95 0c4.472 0 7.95 3.578 7.95 7.95 0 4.373-3.577 7.95-7.95 7.95C3.578 15.9 0 12.324 0 7.95zm6.308 3.719l7.056-7.156-.89-.877-6.607 6.7-2.735-2.82-.897.87 3.18 3.279.445.459.448-.455z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCircleCheckmarkIcon;
