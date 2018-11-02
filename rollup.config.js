import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

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
    resolve({
      customResolveOptions: {
        moduleDirectory: [path.resolve(__dirname, '.'), 'node_modules'],
      },
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    babel(),
  ],
  external: [
    'emotion',
    'prop-types',
    'react',
    'react-emotion',
  ],
};
