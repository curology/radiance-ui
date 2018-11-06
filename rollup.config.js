import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { sizeSnapshot } from "rollup-plugin-size-snapshot";
import url from "rollup-plugin-url"

const path = require('path');

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/bundle.js',
      format: 'umd',
      name: 'radianceUi',
      globals: {
        emotion: 'emotion',
        'prop-types': 'prop-types',
        react: 'react',
        'react-emotion': 'react-emotion',
      },
    },
    {
      file: 'dist/bundle.es.js',
      format: 'esm',
      globals: {
        react: 'react',
      },
    },
  ],
  plugins: [
    url(),
    resolve({
      customResolveOptions: {
        moduleDirectory: [path.resolve(__dirname, '.'), 'node_modules'],
      },
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    babel(),
    sizeSnapshot(),
  ],
  external: [
    'emotion',
    'prop-types',
    'react',
    'react-emotion',
  ],
};
