import isObject from './index';

test('returns true for objects', () => {
  expect(isObject({ foo: 'bar' })).toBe(true);
  expect(isObject({})).toBe(true);
  expect(isObject(Object.create(null))).toBe(true);

  const Thing: any = () => undefined;
  expect(isObject(new Thing())).toBe(true);
});

test('returns false for non-objects', () => {
  expect(isObject('hello')).toBe(false);
  expect(isObject(1)).toBe(false);
  expect(isObject(null)).toBe(false);
  expect(isObject(undefined)).toBe(false);
  expect(isObject([])).toBe(false);
});
