import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import svgr from '@svgr/rollup';
import { defineConfig } from 'rollup'

import pkg from './package.json';

const extensions = ['.js', '.ts', '.tsx'];

const defaultOutputOptions = {
  dir: 'dist',
  exports: 'named',
};

export default defineConfig({
  input: [
    'src/index.ts',
    'src/constants/index.ts',
    'src/icons/index.ts',
    'src/utils/index.ts',
  ],
  output: [
    {
      ...defaultOutputOptions,
      format: 'cjs',
      entryFileNames: '[name].cjs',
    },
    {
      ...defaultOutputOptions,
      format: 'esm',
    },
  ],
  preserveModules: true,
  plugins: [
    svgr({
      expandProps: 'end',
    }),
    typescript(),
    babel({
      babelHelpers: 'runtime',
      extensions,
      exclude: 'node_modules/**',
    }),
  ],
  external: Object.keys(pkg.dependencies).map((name) => new RegExp(`^${name}`)),
});