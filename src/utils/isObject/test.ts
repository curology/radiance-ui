import isObject from './index';

describe('isObject', () => {
  it('returns true for objects', () => {
    expect(isObject({ foo: 'bar' })).toBe(true);
    expect(isObject({})).toBe(true);
    expect(isObject(Object.create(null))).toBe(true);
  });

  it('returns false for non-objects', () => {
    expect(isObject('hello')).toBe(false);
    expect(isObject(1)).toBe(false);
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject([])).toBe(false);
  });
});
