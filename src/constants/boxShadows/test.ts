import compareObjectsKeysLength from 'src/utils/compareObjectsKeysLength';

import PRIMARY_BOX_SHADOWS from './primary';
import SECONDARY_BOX_SHADOWS from './secondary';

describe('theme box shadows', () => {
  it('primary and secondary box shadows have the same number of properties', () => {
    expect(
      compareObjectsKeysLength(PRIMARY_BOX_SHADOWS, SECONDARY_BOX_SHADOWS),
    ).toBe(true);
  });
});
