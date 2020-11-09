import PRIMARY_FONTS from './primary';
import SECONDARY_FONTS from './secondary';

describe('theme fonts', () => {
  it('primary and secondary fonts have the same number of properties', () => {
    expect(Object.keys(PRIMARY_FONTS).length).toEqual(
      Object.keys(SECONDARY_FONTS).length,
    );
  });
});
