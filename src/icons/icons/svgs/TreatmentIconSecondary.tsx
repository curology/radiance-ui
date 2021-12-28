import * as React from 'react';
import { SVGProps } from 'react';

function SvgTreatmentIconSecondary(props: SVGProps<SVGSVGElement>) {
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
        d="M8 16a2.513 2.513 0 0 1-2.514-2.514.69.69 0 0 1 .685-.686.69.69 0 0 1 .686.686 1.143 1.143 0 0 0 2.286 0V9.143h4.343a1.143 1.143 0 0 0 0-2.286H9.143V2.514a1.143 1.143 0 0 0-2.286 0v4.343H2.514a1.143 1.143 0 0 0 0 2.286h3.657a.69.69 0 0 1 .686.686.69.69 0 0 1-.686.685H2.514A2.513 2.513 0 0 1 0 8a2.513 2.513 0 0 1 2.514-2.514h2.972V2.514A2.513 2.513 0 0 1 8 0a2.513 2.513 0 0 1 2.514 2.514v2.972h2.972A2.513 2.513 0 0 1 16 8a2.513 2.513 0 0 1-2.514 2.514h-2.972v2.972A2.513 2.513 0 0 1 8 16Z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgTreatmentIconSecondary;
