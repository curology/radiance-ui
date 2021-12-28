import * as React from 'react';
import { SVGProps } from 'react';

function SvgNotificationsNavIconSecondary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.284 16.149h-.968v-7.73c0-.028.01-.066.01-.093C18.326 3.74 14.586 0 10 0 5.442 0 1.73 3.674 1.674 8.214c-.018.037-.018.074-.018.112v7.823H.698a.697.697 0 1 0 0 1.395H7.73c0 .065-.018.13-.018.195A2.263 2.263 0 0 0 9.972 20a2.263 2.263 0 0 0 2.26-2.26c0-.066-.009-.13-.018-.196h7.051a.703.703 0 0 0 .698-.698.687.687 0 0 0-.68-.697ZM3.05 8.428c.01-.037.01-.065.01-.102a6.936 6.936 0 0 1 6.93-6.93c3.795 0 6.883 3.06 6.93 6.837 0 .027-.01.055-.01.093v7.823H3.052V8.428Zm7.796 9.311c0 .484-.391.866-.866.866a.87.87 0 0 1-.865-.866c0-.065.019-.13.037-.195h1.675c.01.065.019.121.019.195Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgNotificationsNavIconSecondary;
