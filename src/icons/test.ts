import path from 'path';
import fs from 'fs';

/**
 * Transform to help us compare name equality between icon components and their themed export complement:
 *
 * @example
 * transformFileName("SomeIconPrimary.tsx") === "someicon"
 * transformFileName("SomeIconSecondary.tsx") === "someicon"
 * transformFileName("someIcon.ts") === "someicon"
 */
const transformIconFileNames = (fileName: string) =>
  fileName.toLowerCase().replace(/(-|.tsx$|.ts$|primary|secondary)/g, '');

const transformSvgFileNames = (fileName: string) =>
  fileName.toLowerCase().replace(/(-|.tsx$|.ts$|.svg$)/g, '');

const SVG_DIRECTORY_NAME = 'svgs';

const testIconDirectory = (directory: string) => {
  describe(directory, () => {
    /**
     * Pairings meaning the below scenarios are equally valid:
     * 1. someIcon.ts: `import { SomeIcon } from './svgs';
     * 2. someOtherIcon.ts: `import { SomeOtherIconPrimary, SomeOtherIconSecondary } from './svgs';
     */
    it(`should have the same number of svg-generated ${directory} pairings, with complementary naming`, () => {
      const iconFilenames = fs
        .readdirSync(path.resolve(__dirname, directory))
        // Ignore svg directory, handled below (svgFilenames)
        .filter((file) => file !== SVG_DIRECTORY_NAME)
        .map(transformIconFileNames)
        .sort();

      const svgFilenames = fs.readdirSync(
        path.resolve(__dirname, `${directory}/${SVG_DIRECTORY_NAME}`),
      );

      const associatedSvgIconFilenames = new Set(
        svgFilenames.map(transformIconFileNames),
      );

      expect(new Set(iconFilenames)).toStrictEqual(associatedSvgIconFilenames);
    });
  });
};

const testSvgDirectory = (directory: string) => {
  describe(directory, () => {
    // There should be a 1:1 mapping of icons in `src/svgs/${directory}` and components in `src/icons/${directory}/svgs`
    it(`should have the same number of ${directory} svgs as svg-generated components, with complementary naming`, () => {
      const iconFilenames = fs
        .readdirSync(
          path.resolve(__dirname, `${directory}/${SVG_DIRECTORY_NAME}`),
        )
        // Ignore index export, not present among svg files
        .filter((file) => file !== 'index.tsx')
        .map(transformSvgFileNames)
        .sort();

      const svgFilenames = fs
        .readdirSync(
          path.resolve(__dirname, `../${SVG_DIRECTORY_NAME}/${directory}`),
        )
        .map(transformSvgFileNames)
        .sort();

      expect(iconFilenames).toStrictEqual(svgFilenames);
    });
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
  describe('exported icons', () => {
    testIconDirectory(ICONS_MAP.emojis);
    testIconDirectory(ICONS_MAP.glyphs);
    testIconDirectory(ICONS_MAP.icons);
    testIconDirectory(ICONS_MAP.logos);
    testIconDirectory(ICONS_MAP.navIcons);
  });

  describe('generated icons', () => {
    testSvgDirectory(ICONS_MAP.emojis);
    testSvgDirectory(ICONS_MAP.glyphs);
    testSvgDirectory(ICONS_MAP.icons);
    testSvgDirectory(ICONS_MAP.logos);
    testSvgDirectory(ICONS_MAP.navIcons);
  });
});
