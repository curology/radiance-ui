import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import svgr from '@svgr/rollup';
import path from 'path';
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
    resolve({
      extensions,
      moduleDirectories: [path.resolve(__dirname, '.'), 'node_modules'],
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    typescript(),
    babel({
      babelHelpers: 'runtime',
      extensions,
      exclude: 'node_modules/**',
    }),
    sizeSnapshot(),
  ],
  external: Object.keys(pkg.dependencies).map((name) => new RegExp(`^${name}`)),
});