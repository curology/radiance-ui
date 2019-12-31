import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import typescript from '@rollup/plugin-typescript';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import svgr from '@svgr/rollup';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const transformTemplateForUtilLocation = require('./src/utils/svgToIconTemplate/transformTemplateForUtilLocation.js');

const UTIL_LOCATION = '../../utils/icons';

export default {
  input: 'src/index.ts',
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
    {
      file: 'dist/bundle.es.js',
      format: 'esm',
    },
  ],
  plugins: [
    typescript(),
    svgr({
      template: transformTemplateForUtilLocation(UTIL_LOCATION),
      expandProps: false,
    }),
    resolve({
      customResolveOptions: {
        moduleDirectory: [path.resolve(__dirname, '.'), 'node_modules'],
      },
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
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
