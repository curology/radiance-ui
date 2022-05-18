import compareObjectsKeysLength from 'src/utils/compareObjectsKeysLength';

import { primaryTheme } from './primaryTheme';
import { secondaryTheme } from './secondaryTheme';
import { tertiaryTheme } from './tertiaryTheme';

describe('themes', () => {
  it('all themes have the same number of properties', () => {
    expect(compareObjectsKeysLength(primaryTheme, secondaryTheme)).toBe(true);
    expect(compareObjectsKeysLength(primaryTheme, tertiaryTheme)).toBe(true);
  });
});
