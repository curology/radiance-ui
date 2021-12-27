import * as React from 'react';
import { SVGProps } from 'react';

function SvgSparkleSelectedEmoji(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Sparkle Selected Emoji</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.4213 12.7921L23.9006 8L28.7977 12.7921H35.4213ZM12.5995 12.2983L22.3624 8.32586L26.9246 12.7922H12.3589L12.5995 12.2983ZM23.4821 39.7898L9.08374 20.8526H30.1789L23.4821 39.7898ZM28.5256 14.3475L28.264 14.1058H11.7102L9 19.539H30.1999L28.5256 14.3475ZM38.3408 19.539H31.5811L29.8127 14.1058H36.0806L38.3408 19.539ZM39.0001 21.1258L24.8005 40L31.5707 20.8526H38.8955L39.0001 21.1258Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSparkleSelectedEmoji;
