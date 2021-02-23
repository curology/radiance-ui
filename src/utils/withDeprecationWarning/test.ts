import withDeprecationWarning from './index';

const deprecatedMessage = 'This is deprecated!';
const testObj = {
  notDeprecated: 'foo',
  deprecated: 'bar',
};
const deprecatedProperties = {
  deprecated: deprecatedMessage,
};

describe('withDeprecationWarning', () => {
  describe('property that is not in deprecatedProperties', () => {
    it('does not warn in console', () => {
      const warn = jest.spyOn(console, 'warn');
      const subject = withDeprecationWarning(testObj, deprecatedProperties);

      // eslint-disable-next-line no-unused-expressions
      subject.notDeprecated;

      expect(warn).not.toHaveBeenCalled();
      warn.mockRestore();
    });

    it('returns the property value', () => {
      const subject = withDeprecationWarning(testObj, deprecatedProperties);
      const value = subject.notDeprecated;

      expect(value).toBe('foo');
    });
  });

  describe('property that is in deprecatedProperties', () => {
    it('warns in console', () => {
      const warn = jest.spyOn(console, 'warn');
      const subject = withDeprecationWarning(testObj, deprecatedProperties);

      // eslint-disable-next-line no-unused-expressions
      subject.deprecated;

      expect(warn).toHaveBeenCalledWith(
        `[Deprecation Warning]: ${deprecatedMessage}`,
      );
      warn.mockRestore();
    });

    it('returns the property value', () => {
      const subject = withDeprecationWarning(testObj, deprecatedProperties);
      const value = subject.deprecated;

      expect(value).toBe('bar');
    });
  });
});
