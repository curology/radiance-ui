import * as React from 'react';

function SvgFineLinesGlyph(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 20.716L20.566 8l.917.93L8.918 21.647 8 20.716zm1.724 10.427L31.086 9.526l.917.93-21.362 21.618-.917-.93zm27.779-15.942L15.435 37.53l.918.931 22.067-22.33-.917-.931zM25.95 39.069l13.132-13.288.917.93L26.868 40l-.917-.93z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFineLinesGlyph;
