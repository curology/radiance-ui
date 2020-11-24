import * as React from 'react';

function SvgCleanserGlyph(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M30 8H18v1.695l2.32 24.922v3.788l.1.1C21.025 39.7 22.64 40 24.05 40h.404c1.613-.1 2.823-.598 3.227-1.495l.1-.1v-4.087L30 9.994V8zm-5.647 30.804c-1.21.1-2.42-.2-2.824-.698v-2.193c.706.299 1.715.498 2.521.498h.404c.806 0 1.512-.2 2.017-.498v2.093c-.202.399-1.009.698-2.118.798zm2.118-4.586v.2c-.202.299-1.009.697-2.118.697-1.21.1-2.42-.2-2.824-.797L19.21 9.994v-.798h9.48v.499l-2.22 24.523z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCleanserGlyph;
