import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import svgr from '@svgr/rollup';

// eslint-disable-next-line import/extensions
import pkg from './package.json';

// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const transformTemplateForUtilLocation = require('./src/utils/svgToIconTemplate/transformTemplateForUtilLocation.js');

const UTIL_LOCATION = '../../utils/icons';

const extensions = ['.js', '.ts', '.tsx'];

/**
 * {@link https://github.com/TrySound/rollup-plugin-size-snapshot/blob/e30360b3d815a51b9db1917eb4a40ef3a0a72a3f/README.md#options README Options}
 */
const sizeSnapshotDefaults = {
  snapshotPath: '.size-snapshot.json',
  matchSnapshot: false,
  threshold: 0,
  printInfo: true,
};

const isCI = process.env.NODE_ENV === 'CI';

/**
 * Testing size diff in CI
 */
const sizeSnapshotOptions = isCI
  ? { ...sizeSnapshotDefaults, matchSnapshot: true, threshold: 1 }
  : sizeSnapshotDefaults;

console.log('sizeSnapshotOptions', sizeSnapshotOptions);

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
    sizeSnapshot(sizeSnapshotOptions),
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
          'lodash.round': 'round',
          'lodash.throttle': 'throttle',
          'lodash.uniqueid': 'uniqueid',
          'prop-types': 'PropTypes',
          react: 'React',
          'react-dom': 'ReactDOM',
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
      },
    ],
  },
];
