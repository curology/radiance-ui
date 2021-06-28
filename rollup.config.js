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
    babel({
      babelHelpers: 'bundled', // TODO: Investigate 'runtime' option
      extensions,
      exclude: 'node_modules/**',
    }),
    sizeSnapshot(),
  ],
  /**
   * @emotion/styled/base needs to be added explicitly because our
   * @emotion/styled imports transpile specifically to @emotion/styled/base,
   * which results in build errors if we do not include it.
   */
  external: [...Object.keys(pkg.dependencies), '@emotion/styled/base'],
};

export default [
  {
    ...defaultConfig,
    output: {
      file: 'dist/bundle.cjs',
      format: 'cjs',
    },
  },
  {
    ...defaultConfig,
    preserveModules: true,
    output: [
      {
        dir: 'dist/bundle-es',
        format: 'esm',
      },
    ],
  },
];
