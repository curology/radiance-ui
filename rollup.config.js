import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import svgr from '@svgr/rollup';
import alias from '@rollup/plugin-alias';

// eslint-disable-next-line import/extensions
import pkg from './package.json';

// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const transformTemplateForUtilLocation = require('./src/utils/svgToIconTemplate/transformTemplateForUtilLocation.js');

const UTIL_LOCATION = '../../utils/icons';

const extensions = ['.js', '.ts', '.tsx'];

const defaultConfig = {
  input: 'src/index.ts',
  plugins: [
    alias({
      entries: [
        { find: '@emotion/styled', replacement: 'src/utils/theming/styled' },
        {
          find: 'emotion-theming',
          replacement: 'src/utils/theming/emotionTheming',
        },
      ],
    }),
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
  external: [...Object.keys(pkg.dependencies), '@emotion/styled-base'],
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
          '@emotion/styled-base': '_styled',
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
