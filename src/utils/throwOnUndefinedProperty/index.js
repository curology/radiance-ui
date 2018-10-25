export default function throwOnUndefinedProperty(obj) {
  const handler = {
    get(target, property) {
      if (property in target) {
        return target[property];
      }

      throw new Error(`Property '${property}' is not defined`);
    },
  };

  return new Proxy(obj, handler);
}

