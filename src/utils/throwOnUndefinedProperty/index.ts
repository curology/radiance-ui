export default function throwOnUndefinedProperty<T extends object>(obj: T): T {
  const handler = {
    get(target: T, property: string) {
      if (property === '__isProxy') {
        return true;
      }

      if (property in target) {
        return target[property];
      }

      throw new Error(`Property '${property}' is not defined`);
    },
  };

  return new Proxy(obj, handler);
}
