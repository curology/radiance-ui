import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import svgr from '@svgr/rollup';
import { defineConfig } from 'rollup'
import path from 'path';

import pkg from './package.json';

const extensions = ['.js', '.ts', '.tsx'];

const defaultOutputOptions = {
  dir: 'dist',
  exports: 'named',
};

/**
 * A simple Rollup plugin to write our themes to a JSON file.
 *
 * @type {import('rollup').Plugin}
 */
const themeJson = {
  name: 'theme-json',
  generateBundle: async function (options, bundle) {
    const { dir, format } = options;

    if (format !== 'cjs') {
      return;
    }

    const { 'constants/index.cjs': file } = bundle;

    if (!dir || !file) {
      throw new Error('Could not locate the constants entrypoint.');
    }

    const mod = await import(path.resolve(dir, file.fileName));

    const { primaryTheme, secondaryTheme } = mod;

    const json = JSON.stringify({ primaryTheme, secondaryTheme }, null, 2);

    this.emitFile({
      type: 'asset',
      fileName: 'theme.json',
      source: json,
    })
  },
};

export default defineConfig({
  input: [
    'src/index.ts',
    'src/constants/index.ts',
    'src/icons/index.ts',
    'src/utils/index.ts',
  ],
  output: [
    {
      ...defaultOutputOptions,
      format: 'cjs',
      entryFileNames: '[name].cjs',
    },
    {
      ...defaultOutputOptions,
      format: 'esm',
    },
  ],
  preserveModules: true,
  plugins: [
    svgr({
      expandProps: 'end',
    }),
    typescript(),
    babel({
      babelHelpers: 'runtime',
      extensions,
      exclude: 'node_modules/**',
    }),
    themeJson,
  ],
  external: Object.keys(pkg.dependencies).map((name) => new RegExp(`^${name}`)),
});