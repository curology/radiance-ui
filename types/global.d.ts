import React from 'react';

declare global {
  // These are to use import images without TS module not found error
  declare module '*.jpg';
  declare module '*.png';
  declare module '*.gif';

  /**
   * Direct svg imports converted to React components via @svgr
   */
  declare module '*.svg' {
    const SvgComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>;

    export = SvgComponent;
  }

  // No built-in utility counterpart to keyof--this allows us
  // to use it without worrying about importing it everywhere
  type valueof<T> = T[keyof T];
}
