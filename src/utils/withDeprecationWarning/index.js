const allowedEnvironments = ['test', 'development', 'dev'];
const conditional1 = allowedEnvironments.includes(process.env.NODE_ENV);

export default function withDeprecationWarning(obj, deprecatedProperties = {}) {
  const handler = {
    get(target, property) {
      const conditional2 = Object.keys(deprecatedProperties).includes(property);
      if (conditional1 && conditional2) {
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
