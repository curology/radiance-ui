import * as React from 'react';

function SvgMortorGlyph(props: React.SVGProps<SVGSVGElement>) {
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
        d="M34.177 10.806c-1.396-1.216-3.616-1.036-4.822.336L19.009 22.946H8C8 31.75 15.155 38.87 24 38.87c8.846.13 16-7.12 16-15.924H28.21l6.309-7.36c1.213-1.386 1.034-3.582-.342-4.78zm-8.151 12.14l7.231-8.438c.604-.686.522-1.853-.182-2.466-.685-.597-1.847-.518-2.462.18l-9.399 10.724h4.812zM24 37.316c7.415 0 13.529-5.566 14.309-12.687H9.69c.78 7.12 6.894 12.688 14.309 12.688z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMortorGlyph;
