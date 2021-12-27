import * as React from 'react';
import { SVGProps } from 'react';

function SvgSparkleEmoji(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Sparkle Emoji</title>
      <path
        d="M35.6093 12.8531L23.7209 8L12.918 12.3321L9 20.0766L24.4032 40L39 20.9144L35.6093 12.8531ZM36.9532 19.3614H31.6706L29.9339 14.0792H34.7305L36.9532 19.3614ZM24.1861 37.6092L11.0572 20.6386H30.275L24.1861 37.6092ZM27.0703 12.802H15.1716L23.5658 9.44061L27.0703 12.802ZM26.5844 10.5441L32.0944 12.7918H28.9207L26.5844 10.5441ZM13.4762 14.0792H28.3935L28.6417 14.3244L30.306 19.3716H10.7988L13.4762 14.0792ZM26.4087 35.249L31.6602 20.6386H37.501L37.5321 20.7203L26.4087 35.249Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSparkleEmoji;
