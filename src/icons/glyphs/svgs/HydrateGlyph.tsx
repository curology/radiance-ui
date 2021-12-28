import * as React from 'react';
import { SVGProps } from 'react';

function SvgHydrateGlyph(props: SVGProps<SVGSVGElement>) {
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
        d="M21.794 12.788c1.004-1.384 1.551-2.531 1.551-3.788h1.25c0 1.268.571 2.394 1.596 3.77.445.598.96 1.222 1.532 1.917l.265.322a60.868 60.868 0 0 1 2.176 2.77c1.304 1.77 1.925 3.82 1.727 5.825-.2 2.012-1.219 3.928-3.104 5.416l-.01.008a7.774 7.774 0 0 1-4.796 1.577 7.704 7.704 0 0 1-4.818-1.596 7.806 7.806 0 0 1-1.36-11.25c.727-.94 1.425-1.782 2.06-2.549l.15-.18c.68-.82 1.28-1.55 1.781-2.242ZM23.98 29.98l.009-.625a6.524 6.524 0 0 0 4.029-1.32c1.632-1.29 2.465-2.902 2.629-4.554.164-1.66-.345-3.409-1.49-4.96l-.001-.002a59.693 59.693 0 0 0-2.133-2.716l-.263-.32c-.57-.692-1.107-1.342-1.571-1.966-.476-.638-.893-1.27-1.21-1.92-.304.649-.707 1.283-1.173 1.925-.529.729-1.154 1.489-1.83 2.306l-.148.178c-.64.771-1.327 1.6-2.044 2.527l-.006.008-.007.008a6.554 6.554 0 0 0 1.14 9.459l.01.007a6.455 6.455 0 0 0 4.048 1.34l.011.625Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.822 30.168c.598-.384 1.44-.709 2.484-.938l.268 1.22c-.955.21-1.644.491-2.076.77-.468.3-.493.497-.493.5 0 .01.018.181.46.458.41.256 1.044.51 1.883.733 1.669.442 4.01.724 6.622.724s4.953-.282 6.622-.724c.84-.223 1.474-.477 1.883-.733.442-.277.46-.448.46-.458a.298.298 0 0 0-.033-.16c-.023-.04-.083-.12-.257-.227-.369-.228-1.1-.491-2.516-.77l.241-1.226c1.435.282 2.359.578 2.932.933.298.184.53.4.684.667.155.27.199.542.199.783 0 .69-.518 1.187-1.046 1.517-.56.351-1.33.645-2.226.882-1.801.478-4.255.766-6.943.766-2.688 0-5.142-.288-6.943-.766-.896-.237-1.665-.53-2.226-.882-.528-.33-1.046-.827-1.046-1.517 0-.668.505-1.19 1.067-1.552Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.707 27.366a16.28 16.28 0 0 1 1.49-.414l.286 1.216a15.03 15.03 0 0 0-1.381.384l-.009.002-.008.003c-1.577.488-2.82 1.08-3.656 1.721-.844.647-1.184 1.27-1.184 1.822 0 .493.281 1.053.984 1.646.699.59 1.748 1.151 3.097 1.636 2.694.967 6.457 1.583 10.644 1.583 4.188 0 7.948-.609 10.64-1.572 1.348-.483 2.394-1.043 3.092-1.634.7-.593.983-1.156.983-1.659 0-.629-.447-1.352-1.556-2.086-1.09-.72-2.69-1.361-4.677-1.847l.296-1.214c2.064.504 3.817 1.189 5.07 2.018 1.234.816 2.117 1.868 2.117 3.129 0 1.012-.575 1.893-1.425 2.613-.854.723-2.053 1.346-3.48 1.857-2.858 1.023-6.768 1.645-11.06 1.645-4.293 0-8.205-.63-11.066-1.657-1.428-.513-2.627-1.136-3.481-1.857-.85-.718-1.428-1.594-1.428-2.601 0-1.108.685-2.055 1.673-2.814.995-.762 2.389-1.409 4.039-1.92Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHydrateGlyph;
