import * as React from 'react';

function SvgTreatmentIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M10.22 1.29v4.54h4.54v4.42h-4.54v4.54H5.8v-4.54H1.26V5.83H5.8V1.29h4.42zM11.47.04H4.55v4.54H.01v6.92h4.54v4.54h6.92V11.5h4.54V4.58h-4.54V.04z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTreatmentIcon;
