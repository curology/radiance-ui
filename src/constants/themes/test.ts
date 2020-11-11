import compareObjectsKeysLength from 'src/utils/compareObjectsKeysLength';

import { primaryTheme } from './primaryTheme';
import { secondaryTheme } from './secondaryTheme';

describe('themes', () => {
  it('primary and secondary themes have the same number of properties', () => {
    expect(compareObjectsKeysLength(primaryTheme, secondaryTheme)).toBe(true);
  });
});
