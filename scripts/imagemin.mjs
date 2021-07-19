/**
 * Inspired by https://gist.github.com/tomchentw/19c4275bc2c2e89e18a616355a3cca88
 *
 * We run this script to automatically compress/optimize images before committing them.
 *
 * In the majority of cases, this auto-optimization should suffice. However, **if you are noticing
 * pixelation or some other defect, and would like to opt-out of this behvaior**, you can either:
 *
 * 1. Pass in the `lint-staged` `--no-verify` flag to your commit. (Please limit your commit to *only* images if you choose this method)
 * 2. Comment out the respective images glob in .lintstagedrc.js
 */

import fs from 'fs';
import imagemin from 'imagemin';
import imageminSvg from 'imagemin-svgo';
import { extendDefaultPlugins } from 'svgo';

const plugins = [
  imageminSvg({
    plugins: extendDefaultPlugins([
      { name: 'removeViewBox', active: false },
      { name: 'removeTitle', active: false },
    ]),
  }),
];

const minifyFile = (filename) =>
  new Promise((resolve, reject) =>
    fs.readFile(filename, (err, data) => (err ? reject(err) : resolve(data))),
  )
    .then((originalBuffer) =>
      imagemin.buffer(originalBuffer, { plugins }).then((minimizedBuffer) => {
        /**
         * In some cases, running these optimizations can actually *increase* the
         * size of a file if there is already optimization present.
         *
         * In those cases, we will skip the writing of a new file
         */
        const didCompressionShrinkFileSize =
          minimizedBuffer.length < originalBuffer.length;

        return {
          didCompressionShrinkFileSize,
          minimizedBuffer,
        };
      }),
    )
    .then(
      ({ didCompressionShrinkFileSize, minimizedBuffer }) =>
        new Promise((resolve, reject) => {
          if (!didCompressionShrinkFileSize) {
            return resolve();
          }

          return fs.writeFile(filename, minimizedBuffer, (err) =>
            err ? reject(err) : resolve(),
          );
        }),
    );

Promise.resolve(process.argv)
  /**
   * Example filepaths array:
   *
   * [
   * '/usr/local/Cellar/node@12/12.20.0/bin/node',
   * '/Users/<user>/radiance/scripts/imagemin.js',
   * '/Users/<user>/radiance/path/to/image.{ext}', like src/icons/*.svg
   * '/Users/<user>/radiance/path/to/image2.{ext}', etc.
   * ]
   */
  .then((filepaths) => {
    const images = filepaths.slice(2);

    return images.map(minifyFile);
  })
  .then((buffers) => Promise.all(buffers))
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error(err);
    process.exit(1);
  });
