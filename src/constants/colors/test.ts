import PRIMARY_COLORS from './primary';
import SECONDARY_COLORS from './secondary';

describe('theme colors', () => {
  it('primary and secondary colors have the same number of properties', () => {
    expect(Object.keys(PRIMARY_COLORS).length).toEqual(
      Object.keys(SECONDARY_COLORS).length,
    );
  });
});
