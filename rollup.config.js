import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import svgr from '@svgr/rollup';
import path from 'path';

// eslint-disable-next-line import/extensions
import pkg from './package.json';

const extensions = ['.js', '.ts', '.tsx'];

const defaultConfig = {
  preserveModules: true,
  input: [
    'src/index.ts',
    'src/icons/index.ts',
    'src/constants/index.ts',
    'src/utils/index.ts',
  ],
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
    babel({
      babelHelpers: 'bundled', // TODO: Investigate 'runtime' option
      extensions,
      exclude: 'node_modules/**',
    }),
    sizeSnapshot(),
  ],
  external: [...Object.keys(pkg.dependencies), '@emotion/styled-base'],
};

export default [
  {
    ...defaultConfig,
    output: [
      {
        dir: 'dist/cjs',
        entryFileNames: '[name].cjs',
        format: 'cjs',
      },
    ],
  },
  {
    ...defaultConfig,
    output: [
      {
        dir: 'dist/esm',
        entryFileNames: '[name].js',
        format: 'esm',
      },
    ],
  },
];
