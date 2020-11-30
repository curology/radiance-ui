import * as React from 'react';

function SvgSparkleSelectedEmoji(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.421 12.792L23.901 8l4.897 4.792h6.623zM12.6 12.298l9.763-3.972 4.563 4.466H12.359l.24-.494zM23.482 39.79L9.084 20.853h21.095L23.482 39.79zm5.044-25.442l-.262-.242H11.71L9 19.539h21.2l-1.674-5.192zm9.815 5.191h-6.76l-1.768-5.433h6.268l2.26 5.433zm.66 1.587L24.8 40l6.77-19.147h7.324l.105.273z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSparkleSelectedEmoji;
