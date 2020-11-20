import path from 'path';
import fs from 'fs';

/**
 * Transform to help us compare name equality between icon component files and their
 * svg counterparts.
 *
 * @example
 * transformFileName("some-icon.svg") === "someicon"
 * transformFileName("someIcon.ts") === "someicon"
 */
const transformFileName = (fileName: string) =>
  fileName.toLowerCase().replace(/(-|.tsx$|.ts$|.svg$|)/g, '');

const SVG_DIRECTORY_NAME = 'svgs';

const testIconDirectory = (directory: string) => {
  it(`should have the same number of ${directory} as svg paths, with complementary naming`, () => {
    const iconFilenames = fs
      .readdirSync(path.resolve(__dirname, directory))
      .filter((file) => {
        // Ignore svg directory
        if (file === SVG_DIRECTORY_NAME) return false;
        // Ignore exports files
        if (file === 'index') return false;

        return true;
      })
      .map(transformFileName);

    const svgFilenames = fs
      .readdirSync(
        path.resolve(__dirname, `${directory}/${SVG_DIRECTORY_NAME}`),
      )
      .map(transformFileName);

    expect(iconFilenames.sort()).toEqual(svgFilenames.sort());
  });
};

const ICONS_MAP = {
  emojis: 'emojis',
  glyphs: 'glyphs',
  icons: 'icons',
  logos: 'logos',
  navIcons: 'navIcons',
};

describe('icons', () => {
  describe(ICONS_MAP.emojis, () => testIconDirectory(ICONS_MAP.emojis));
  describe(ICONS_MAP.glyphs, () => testIconDirectory(ICONS_MAP.glyphs));
  describe(ICONS_MAP.icons, () => testIconDirectory(ICONS_MAP.icons));
  describe(ICONS_MAP.logos, () => testIconDirectory(ICONS_MAP.logos));
  describe(ICONS_MAP.navIcons, () => testIconDirectory(ICONS_MAP.navIcons));
});
