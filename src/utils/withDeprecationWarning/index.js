export default function withDeprecationWarning(obj, deprecatedProperties = {}) {
  const handler = {
    get(target, property) {
      if (Object.keys(deprecatedProperties).includes(property)) {
        console.warn(`[Deprecation Warning]: ${deprecatedProperties[property]}`);
      }

      return target[property];
    },
  };

  return new Proxy(obj, handler);
}
