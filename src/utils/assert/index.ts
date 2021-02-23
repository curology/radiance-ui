function assert(value: boolean, message?: string): asserts value;
function assert<T>(
  value: T | null | undefined,
  message?: string,
): asserts value is T;
/**
 * @see https://gist.github.com/jamiebuilds/2a40f565cba317a80bed1eec127340f6
 */
function assert(value: unknown, message?: string) {
  if (value === false || value === null || typeof value === 'undefined') {
    throw new Error(message ?? 'Assertion failed');
  }
}

export { assert };
