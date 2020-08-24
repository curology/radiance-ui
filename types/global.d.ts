// These are to use import images without TS module not found error
declare module '*.jpg';
declare module '*.png';
declare module '*.gif';
declare module '*.svg';

// No built-in utility counterpart to keyof--this allows us
// to use it without worrying about importing it everywhere
type valueof<T> = T[keyof T];
