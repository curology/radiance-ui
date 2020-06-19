import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import svgr from '@svgr/rollup';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const transformTemplateForUtilLocation = require('./src/utils/svgToIconTemplate/transformTemplateForUtilLocation.js');

const UTIL_LOCATION = '../../utils/icons';

const extensions = ['.js', '.ts', '.tsx'];

const defaultConfig = {
  input: 'src/index.ts',
  plugins: [
    svgr({
      template: transformTemplateForUtilLocation(UTIL_LOCATION),
      expandProps: false,
    }),
    resolve({
      extensions,
      customResolveOptions: {
        moduleDirectory: [path.resolve(__dirname, '.'), 'node_modules'],
      },
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      extensions,
      exclude: 'node_modules/**',
    }),
    sizeSnapshot(),
  ],
  external: [
    '@emotion/core',
    '@emotion/styled',
    'prop-types',
    'react',
    'react-modal',
    'react-slick',
    'react-toggle-button',
    'react-transition-group',
    'tinycolor2',
  ],
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
          '@emotion/core': '@emotion/core',
          '@emotion/styled': 'styled',
          'prop-types': 'PropTypes',
          react: 'React',
          'react-modal': 'react-modal',
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
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    ],
    plugins: [...defaultConfig.plugins, peerDepsExternal()],
  },
];
