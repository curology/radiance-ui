const allowedEnvironments = ['test', 'development', 'dev'];
const shouldShowForEnvironment = allowedEnvironments.includes(
  process.env.NODE_ENV
);

export default function withDeprecationWarning(obj, deprecatedProperties = {}) {
  const handler = {
    get(target, property) {
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
