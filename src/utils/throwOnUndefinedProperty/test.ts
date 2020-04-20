import throwOnUndefinedProperty from './index';

test('throws an error when trying to access undefined property', () => {
  const obj = { foo: 'bar' };
  const protectedObj = throwOnUndefinedProperty(obj);

  expect(protectedObj.foo).toBe('bar');
  // @ts-ignore TS is catching the error we want to throw for this test
  expect(() => protectedObj.baz).toThrow("Property 'baz' is not defined");
});
