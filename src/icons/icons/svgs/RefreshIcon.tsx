import * as React from 'react';
import { SVGProps } from 'react';

function SvgRefreshIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Refresh Icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.85 1.31006H2.71997V4.64006H1.46997V0.0600586H14.1V7.98006L15.1 6.99006L15.98 7.88006L13.48 10.3301L10.9 7.74006L11.78 6.85006L12.85 7.92006V1.31006ZM3.14998 14.7399H12.85V11.4099H14.1V15.9899H1.89998V8.28992L0.919983 9.24992L0.0499878 8.35992L2.53998 5.91992L5.12999 8.49992L4.23999 9.38992L3.14998 8.29993V14.7399Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgRefreshIcon;
