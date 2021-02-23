import throwOnUndefinedProperty from './index';

test('throws an error when trying to access undefined property', () => {
  const obj = { foo: 'bar' };
  const protectedObj = throwOnUndefinedProperty(obj);

  expect(protectedObj.foo).toBe('bar');
  /* eslint-disable @typescript-eslint/no-unsafe-return */
  // @ts-expect-error: TS is catching the error we want to throw for this test
  expect(() => protectedObj.baz).toThrow("Property 'baz' is not defined");
  /* eslint-enable @typescript-eslint/no-unsafe-return */
});
