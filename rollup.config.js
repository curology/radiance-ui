import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import svgr from '@svgr/rollup';

const path = require('path');

const transformTemplateForUtilLocation = require('./src/utils/svgToIconTemplate/transformTemplateForUtilLocation.js');

const UTIL_LOCATION = '../../utils/icons';

export default {
  input: 'src/index.js',
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
        '@emtion/styled': 'styled',
        'prop-types': 'PropTypes',
        react: 'React',
        '@emotion/core': '@emotion/core',
        tinycolor2: 'tinycolor',
      },
    },
    {
      file: 'dist/bundle.es.js',
      format: 'esm',
    },
  ],
  plugins: [
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
    }),
    sizeSnapshot(),
  ],
  external: [
    '@emotion/styled',
    'prop-types',
    'react',
    '@emotion/core',
    'tinycolor2',
  ],
};
