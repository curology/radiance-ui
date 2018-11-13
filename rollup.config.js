import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import url from 'rollup-plugin-url';
import svgr from '@svgr/rollup';

const path = require('path');

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
        emotion: 'emotion',
        'prop-types': 'PropTypes',
        react: 'React',
        'react-emotion': 'styled',
        tinycolor2: 'tinycolor',
      },
    },
    {
      file: 'dist/bundle.es.js',
      format: 'esm',
    },
  ],
  plugins: [
    url(),
    svgr(),
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
    'emotion',
    'prop-types',
    'react',
    'react-emotion',
    'tinycolor2',
  ],
};
