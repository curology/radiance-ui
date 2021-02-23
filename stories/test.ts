import path from 'path';
import fs from 'fs';

const PRIMARY_STORIES = 'index.stories.tsx';
const SECONDARY_STORIES = 'secondary.stories.tsx';

const hasPrimaryStory = (file: string) => file === PRIMARY_STORIES;
const hasSecondaryStory = (file: string) => file === SECONDARY_STORIES;

const getDirectories = (pathName: string) =>
  fs
    .readdirSync(path.resolve(pathName), { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

describe('Stories', () => {
  describe('Components', () => {
    /**
     * Filter out helper files, since all stories exist within their own folder
     */
    const directoryNames = getDirectories(__dirname);

    directoryNames.forEach((directoryName) => {
      describe(`${directoryName}`, () => {
        const componentPath = path.resolve(__dirname, directoryName);
        const files = fs.readdirSync(componentPath);
        const nestedFolders = getDirectories(componentPath);

        it('should have a corresponding secondary story for visual regression testing', () => {
          expect(files.some(hasPrimaryStory)).toBe(true);
          expect(files.some(hasSecondaryStory)).toBe(true);
        });

        nestedFolders.forEach((folder) => {
          describe(`${directoryName} - ${folder}`, () => {
            const nestedFiles = fs.readdirSync(
              path.resolve(componentPath, folder),
            );

            it('should also have corresponding stories for subcomponents', () => {
              expect(nestedFiles.some(hasPrimaryStory)).toBe(true);
              expect(nestedFiles.some(hasSecondaryStory)).toBe(true);
            });
          });
        });
      });
    });
  });
});
