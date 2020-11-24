export default function throwOnUndefinedProperty<
  T extends Record<string, unknown>
>(obj: T): T {
  const handler = {
    get(target: T, property: string) {
      if (property === '__isProxy') {
        return true;
      }

      if (property in target) {
        return target[property];
      }

      // Allow React-Fast-Refresh to check if objects are components
      if (property === '$$typeof') {
        return;
      }

      throw new Error(`Property '${property}' is not defined`);
    },
  };

  return new Proxy(obj, handler);
}
