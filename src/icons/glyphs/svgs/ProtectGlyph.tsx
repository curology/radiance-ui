import * as React from 'react';

function SvgProtectGlyph(props: React.SVGProps<SVGSVGElement>) {
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
        d="M16.17 13.215a3.955 3.955 0 100 7.91 3.955 3.955 0 000-7.91zm-5.205 3.955a5.205 5.205 0 1110.41 0 5.205 5.205 0 01-10.41 0zM22.616 17.42l1.73.24-.172 1.239-1.73-.24.172-1.238zM8.162 15.45l1.74.23-.164 1.24-1.74-.23.164-1.24zM20.547 21.901l1.06 1.39-.994.758-1.06-1.39.994-.758zM11.739 10.293l1.05 1.39-.998.754-1.05-1.39.998-.754zM15.92 23.613l-.23 1.73-1.24-.165.23-1.73 1.24.165zM17.9 9.165l-.24 1.74-1.24-.17.24-1.74 1.24.17zM11.439 21.547l-1.39 1.06-.758-.994 1.39-1.06.758.994zM23.047 12.739l-1.39 1.05-.754-.998 1.39-1.05.754.998z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.264 14.887a75.31 75.31 0 00-9.824-.632c-.553 0-1.104.017-1.662.035h-.016c-.55.018-1.106.035-1.663.035v-1.25c.537 0 1.077-.017 1.633-.034h.007a53.74 53.74 0 011.7-.036 76.539 76.539 0 0110.536.716l.54.074v12.633a11.207 11.207 0 01-5.486 9.67l-5.59 3.308-5.599-3.309a11.206 11.206 0 01-5.485-9.668V26.3h1.25v.132a9.955 9.955 0 004.873 8.59l4.961 2.932 4.952-2.931a9.955 9.955 0 004.873-8.591V14.887z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.685 26.3v-7.54h1.25v7.54"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgProtectGlyph;
