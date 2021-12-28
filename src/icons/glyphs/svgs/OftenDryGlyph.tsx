import * as React from 'react';
import { SVGProps } from 'react';

function SvgOftenDryGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Often Dry Glyph</title>
      <path
        d="M31.805 21.001a3.19 3.19 0 0 0-3.184 3.18v5.262h1.297v-5.262c0-1.036.85-1.885 1.887-1.885 1.038 0 1.888.85 1.888 1.885v5.262c0 1.74-1.4 4.63-6.514 4.931V13.18A3.19 3.19 0 0 0 23.995 10a3.19 3.19 0 0 0-3.185 3.18v13.943c0 .383-.082.704-.248.89a.527.527 0 0 1-.395.198c-.383 0-.798-.404-.798-1.16v-8.039a3.19 3.19 0 0 0-3.185-3.18A3.19 3.19 0 0 0 13 19.012v8.039c0 2.247 1.711 5.997 8.049 6.246V38h1.297v-5.987h-.643c-5.84 0-7.396-3.119-7.396-4.962v-8.039c0-1.036.85-1.885 1.888-1.885 1.037 0 1.887.85 1.887 1.885v8.039c0 1.595 1.08 2.455 2.096 2.455.54 0 1.037-.228 1.39-.653.363-.425.55-1.026.55-1.73V13.18c0-1.036.85-1.885 1.887-1.885s1.888.85 1.888 1.885V38h1.296v-2.33C33.32 35.347 35 31.66 35 29.442v-5.262c0-1.75-1.431-3.18-3.195-3.18Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgOftenDryGlyph;
