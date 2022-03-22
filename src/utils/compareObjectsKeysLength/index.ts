import isObject from '../isObject';

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
interface RecursiveObjectType {
  [key: string]: string | number | this | null;
}

const stringifyObjects = (
  obj1: RecursiveObjectType,
  obj2: RecursiveObjectType,
) => `\n\nobj1: ${JSON.stringify(obj1)}\n\nobj2:${JSON.stringify(obj2)}`;

const compareObjectsKeysLength = (
  obj1: RecursiveObjectType,
  obj2: RecursiveObjectType,
): boolean => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    console.error(`Object keys do not match:${stringifyObjects(obj1, obj2)}`);
    return false;
  }

  return Object.keys(obj1).every((key) => {
    const obj1Val = obj1[key];
    const obj2Val = obj2[key];

    // Test deep key equality recursively
    if (isObject(obj1Val) && isObject(obj2Val)) {
      return compareObjectsKeysLength(obj1Val, obj2Val);
    }

    /*
     * Check if property value is null or undefined, neither of which are valid
     * theme values, which means there was not a complementary key found
     */
    if (obj2Val == null) {
      console.error(
        `Key "${key}" missing in obj2:${stringifyObjects(obj1, obj2)}`,
      );
      return false;
    }

    return true;
  });
};

export default compareObjectsKeysLength;
