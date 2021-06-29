import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import svgr from '@svgr/rollup';
import path from 'path';
import { defineConfig } from 'rollup'

const extensions = ['.js', '.ts', '.tsx'];

const defaultOutputOptions = {
  dir: 'dist',
  exports: 'named',
};

export default defineConfig({
  input: 'src/index.ts',
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
  // Note that this regex only works when using @rollup/plugin-node-resolve
  external: /node_modules/,
  preserveModules: true,
  output: [
    {
      ...defaultOutputOptions,
      format: 'cjs',
      entryFileNames: '[name].cjs',
    },
    {
      ...defaultOutputOptions,
      format: 'esm',
      entryFileNames: '[name].mjs',
    },
    {
      ...defaultOutputOptions,
      format: 'esm',
      entryFileNames: '[name].module.js',
    },
  ],
});