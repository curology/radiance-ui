import compareObjectsKeysLength from 'src/utils/compareObjectsKeysLength';

import PRIMARY_FONTS from './primary';
import SECONDARY_FONTS from './secondary';

describe('theme fonts', () => {
  it('primary and secondary fonts have the same number of properties', () => {
    expect(compareObjectsKeysLength(PRIMARY_FONTS, SECONDARY_FONTS)).toBe(true);
  });
});
