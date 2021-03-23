import { isDefined } from '.';

describe('isDefined', () => {
  it('should return true for any argument that is neither null nor undefined', () => {
    expect(isDefined('string')).toStrictEqual(true);
    expect(isDefined(1)).toStrictEqual(true);
    expect(isDefined([])).toStrictEqual(true);
    expect(isDefined({})).toStrictEqual(true);
    expect(isDefined(Symbol('Test'))).toStrictEqual(true);
  });

  it('should return false for null and undefined', () => {
    expect(isDefined(undefined)).toStrictEqual(false);
    expect(isDefined(null)).toStrictEqual(false);
  });

  it('should filter out null and undefined values when provided as an argument to Array.prototype.filter()', () => {
    const nonNullArray = [1, 2, 3];
    const nullArray = [null, null, null];
    const mixedArray = [1, undefined, 3];

    expect(nonNullArray.filter(isDefined)).toHaveLength(3);
    expect(nullArray.filter(isDefined)).toHaveLength(0);
    expect(mixedArray.filter(isDefined)).toHaveLength(2);
  });
});
