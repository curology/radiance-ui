import compareObjectsKeysLength from 'src/utils/compareObjectsKeysLength';

import { PRIMARY_TYPOGRAPHY } from './primaryTypography';
import { SECONDARY_TYPOGRAPHY } from './secondaryTypography';

describe('theme typography', () => {
  it('primary and secondary typography have the same number of properties', () => {
    expect(
      compareObjectsKeysLength(PRIMARY_TYPOGRAPHY, SECONDARY_TYPOGRAPHY),
    ).toBe(true);
  });
});
