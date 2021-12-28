import * as React from 'react';
import { SVGProps } from 'react';

function SvgPhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Phone Icon</title>
      <path
        d="M12.68 16c-1.3 0-2.73-.4-4.17-1.16-2.96-1.58-5.04-3.68-6.34-6.43-.79-1.66-1.2-3.13-1.5-5.4l-.06-.43L5.23.07l3.28 5.29-2.69 1.86c.85 1.42 2.52 2.63 3.25 3.12l2.69-2.08 4.27 3.54-2.88 4.18-.32.01c-.06.01-.1.01-.15.01ZM1.97 3.27c.32 2.17.75 3.38 1.33 4.61 1.19 2.5 3.08 4.42 5.8 5.87 1.18.62 2.34.97 3.38 1.01l1.87-2.71-2.62-2.17-2.58 2-.37-.22c-.13-.08-3.25-1.96-4.34-4.36l-.22-.48 2.59-1.8-2.03-3.28-2.81 1.53Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPhoneIcon;
