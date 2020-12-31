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
   * @emotion/styled/base needs to be adding explicitly because certain @emotion/styled usage,
   * like in our Typography exports, seems to rely directly on @emotion/styled/base, and if we
   * do not provide it our build includes a node_modules file that includes it, which upsets
   * the hierarchy with which our build depends
   */
  external: [...Object.keys(pkg.dependencies), '@emotion/styled/base'],
};

export default [
  {
    ...defaultConfig,
    output: [
      {
        file: 'dist/bundle.js',
        format: 'cjs',
        name: 'radianceUi',
      },
      {
        file: 'dist/bundle.umd.js',
        format: 'umd',
        name: 'radianceUi',
        globals: {
          '@emotion/react': '@emotion/react',
          '@emotion/styled': 'styled',
          '@emotion/styled/base': '_styled',
          '@react-aria/focus': '@react-aria/focus',
          'lodash.round': 'round',
          'lodash.throttle': 'throttle',
          'lodash.uniqueid': 'uniqueid',
          'prop-types': 'PropTypes',
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-slick': 'react-slick',
          'react-toggle-button': 'react-toggle-button',
          'react-transition-group': 'react-transition-group',
          tinycolor2: 'tinycolor',
        },
      },
    ],
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
