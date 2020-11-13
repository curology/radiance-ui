import shouldShowForEnvironment from '../shouldShowForEnvironment';

// Generic is tricky to type because it covers both React Components and plain objects
// eslint-disable-next-line @typescript-eslint/ban-types
export default function withDeprecationWarning<T extends object>(
  obj: T,
  deprecatedProperties: Record<string, string> = {},
): T {
  const handler = {
    get(target: T, property: string) {
      const isDeprecatedProperty = Object.keys(deprecatedProperties).includes(
        property,
      );
      if (shouldShowForEnvironment() && isDeprecatedProperty) {
        // eslint-disable-next-line no-console
        console.warn(
          `[Deprecation Warning]: ${deprecatedProperties[property]}`,
        );
      }

      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return target[property];
    },
  };

  return new Proxy(obj, handler);
}
