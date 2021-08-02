import React from 'react';

declare global {
  declare module 'docs/*' {
    const markdown: string | string[];

    export = markdown;
  }

  // These are to use import images without TS module not found error
  declare module '*.jpg' {
    const filepath: string;

    export = filepath;
  }
  declare module '*.png' {
    const filepath: string;

    export = filepath;
  }
  declare module '*.gif' {
    const filepath: string;

    export = filepath;
  }

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

  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV?: string;
    }
  }
}
