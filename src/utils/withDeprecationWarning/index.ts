const allowedEnvironments = ['test', 'development', 'dev'];

const environment = process.env.NODE_ENV;

const shouldShowForEnvironment =
  typeof environment === 'string'
    ? allowedEnvironments.includes(environment)
    : false;

export default function withDeprecationWarning<T extends object>(
  obj: T,
  deprecatedProperties = {}
): T {
  const handler = {
    get(target: T, property: string) {
      const isDeprecatedProperty = Object.keys(deprecatedProperties).includes(
        property
      );
      if (shouldShowForEnvironment && isDeprecatedProperty) {
        // eslint-disable-next-line no-console
        console.warn(
          `[Deprecation Warning]: ${deprecatedProperties[property]}`
        );
      }

      return target[property];
    },
  };

  return new Proxy(obj, handler);
}
