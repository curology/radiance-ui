import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/bundle.js',
      format: 'umd',
    },
    {
      file: 'dist/bundle.es.js',
      format: 'esm',
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel(),
  ],
  external: [
    'emotion',
    'prop-types',
    'react',
    'react-emotion',
  ],
};
