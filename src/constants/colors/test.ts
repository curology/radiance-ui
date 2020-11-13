import compareObjectsKeysLength from 'src/utils/compareObjectsKeysLength';

import PRIMARY_COLORS from './primary';
import SECONDARY_COLORS from './secondary';

describe('theme colors', () => {
  it('primary and secondary colors have the same number of properties', () => {
    expect(compareObjectsKeysLength(PRIMARY_COLORS, SECONDARY_COLORS)).toBe(
      true,
    );
  });
});
