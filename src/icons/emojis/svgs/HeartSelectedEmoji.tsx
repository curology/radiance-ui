import * as React from 'react';
import { SVGProps } from 'react';

function SvgHeartSelectedEmoji(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Heart Selected Emoji</title>
      <path
        d="M24.5705 37.9861L24.2405 37.7661C23.7505 37.4361 12.1205 29.5861 9.59048 25.4561C6.56048 20.5061 8.36048 15.7661 10.8305 13.2061C12.7105 11.2561 15.5105 10.1661 18.3105 10.3161C19.9205 10.3961 22.1005 10.8961 24.2005 12.6561C24.8405 12.2161 25.3905 11.8561 25.8405 11.5861C30.8905 8.57613 35.6505 10.2561 38.1305 13.2461C40.9805 16.6861 41.4505 21.3561 39.3605 25.4161C37.1105 29.7561 25.4005 37.4461 24.9005 37.7661L24.5705 37.9861Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHeartSelectedEmoji;
